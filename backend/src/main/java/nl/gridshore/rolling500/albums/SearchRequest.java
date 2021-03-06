package nl.gridshore.rolling500.albums;

import java.util.List;
import java.util.Map;

/**
 * Request object to contain required parameters to execute a search.
 */
public class SearchRequest {
    private long page;
    private int size;
    private String searchString;
    private boolean enableLtr = false;
    private String ltrModel;
    private List<FilterRequest> filters;
    private String userId;

    public long getPage() {
        return page;
    }

    public void setPage(long page) {
        this.page = page;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String getSearchString() {
        return searchString;
    }

    public void setSearchString(String searchString) {
        this.searchString = searchString;
    }

    public List<FilterRequest> getFilters() {
        return filters;
    }

    public void setFilters(List<FilterRequest> filters) {
        this.filters = filters;
    }

    public boolean isEnableLtr() {
        return enableLtr;
    }

    public void setEnableLtr(boolean enableLtr) {
        this.enableLtr = enableLtr;
    }

    public String getLtrModel() {
        return ltrModel;
    }

    public void setLtrModel(String ltrModel) {
        this.ltrModel = ltrModel;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
