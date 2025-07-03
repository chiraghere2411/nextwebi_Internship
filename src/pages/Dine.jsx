import React, { useState } from 'react';
import Layout from '../layout/Layout';
import BiryaniCard from 'components/BiryaniCard/BiryaniCard';
import biryaniData from 'data/biryaniData.json';
import '../global.css';

export default function Dine() {
  const [filters, setFilters] = useState({
    type: 'all',
    rating: null,
    badge: null,
    category: null,
  });

  const [showDropdown, setShowDropdown] = useState(false);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleBestSeller = () => {
    setFilters((prev) => ({
      ...prev,
      badge: prev.badge === 'Best Seller' ? null : 'Best Seller',
    }));
  };

  const clearSingleFilter = (key) => {
    const defaultValues = {
      type: 'all',
      rating: null,
      badge: null,
      category: null,
    };
    setFilters((prev) => ({
      ...prev,
      [key]: defaultValues[key],
    }));
  };

  const filteredData = biryaniData.filter((item) => {
    const { type, rating, badge, category } = filters;

    const matchesType = type === 'all' || item.type === type;
    const matchesRating = rating === null || item.rating >= rating;
    const matchesBadge = badge === null || item.badge === badge;

    let matchesCategory = true;
    if (category === 'biryani') {
      matchesCategory =
        Array.isArray(item.category) &&
        (item.category.includes('veg-biryani') || item.category.includes('nonveg-biryani'));
      if (type !== 'all') {
        matchesCategory =
          matchesCategory &&
          ((type === 'veg' && item.category.includes('veg-biryani')) ||
            (type === 'nonveg' && item.category.includes('nonveg-biryani')));
      }
    } else if (category) {
      matchesCategory = Array.isArray(item.category) && item.category.includes(category);
    }

    return matchesType && matchesRating && matchesBadge && matchesCategory;
  });

  const getActiveFilters = () => {
    const active = [];
    if (filters.type !== 'all') active.push({ key: 'type', label: `Type: ${filters.type}` });
    if (filters.rating !== null) active.push({ key: 'rating', label: `Rating: ${filters.rating}+` });
    if (filters.category !== null) active.push({ key: 'category', label: `Cuisine: ${filters.category}` });
    if (filters.badge !== null)
      active.push({
        key: 'badge',
        label: `${filters.type !== 'all' ? filters.type.charAt(0).toUpperCase() + filters.type.slice(1) + ' ' : ''}Best Seller`,
      });

    return active;
  };

  return (
    <Layout>
      <div className="dine-page">
        <h1 className="dine-title">Our Dine-In Menu</h1>

        <div className="filter-buttons-container">
          <div className="filter-buttons">
            {['all', 'veg', 'nonveg'].map((btnType) => (
              <button
                key={btnType}
                onClick={() => updateFilter('type', btnType)}
                className={filters.type === btnType ? 'active' : ''}
              >
                {btnType === 'all' ? 'All' : btnType.charAt(0).toUpperCase() + btnType.slice(1)}
              </button>
            ))}
            <button
              onClick={toggleBestSeller}
              className={filters.badge === 'Best Seller' ? 'active' : ''}
            >
              Best Seller
            </button>
          </div>
          <div className="dropdown-wrapper">
            <button className="filters" onClick={() => setShowDropdown(!showDropdown)}>
              Filter
            </button>

            {showDropdown && (
              <div className="custom-select-menu">
                <label className="dropdown-label" htmlFor="rating">Rating</label>
                <select
                  id="rating"
                  onChange={(e) => updateFilter('rating', e.target.value ? Number(e.target.value) : null)}
                  value={filters.rating !== null ? filters.rating : ''}
                >
                  <option value="">Please select...</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5</option>
                </select>

                <label className="dropdown-label" htmlFor="category">Cuisine</label>
                <select
                  id="category"
                  onChange={(e) => updateFilter('category', e.target.value || null)}
                  value={filters.category ?? ''}
                >
                  <option value="">Please select...</option>
                  <option value="biryani">Biryani</option>
                  <option value="pizza">Pizza</option>
                  <option value="burger">Burger</option>
                  <option value="other">Other</option>
                </select>

                <button className="close-filter-btn" onClick={() => setShowDropdown(false)}>
                  Close Filter
                </button>
              </div>
            )}
          </div>
        </div>

        {getActiveFilters().length > 0 && (
          <div className="active-filters">
            <div className="filters-applied">
              <strong>Active Filters:</strong>{' '}
              {getActiveFilters().map((filter, index) => (
                <span key={index} className="filter-tag">
                  {filter.label}
                  <button
                    onClick={() => clearSingleFilter(filter.key)}
                    style={{
                      marginLeft: '6px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                    aria-label={`Remove ${filter.label}`}
                  >
                    ✖
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="dine-menu-container">
          {filteredData.length === 0 ? (
            <p>No items match your filter.</p>
          ) : (
            filteredData.map((item) => (
              <BiryaniCard key={item.name} {...item} />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}
