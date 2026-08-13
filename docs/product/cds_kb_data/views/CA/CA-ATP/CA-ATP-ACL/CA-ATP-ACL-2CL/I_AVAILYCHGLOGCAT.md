---
name: I_AVAILYCHGLOGCAT
description: "Availychglogcat"
semantic_vi: "View Availychglogcat hiển thị các loại nhật ký thay đổi khả dụng và giá trị miền tương ứng, có thể được sử dụng để theo dõi và quản lý thay đổi khả dụng của sản phẩm trong chuỗi cung ứng."
keywords:
  - "availability change"
  - "log category"
  - "domain value"
  - "supply chain"
  - "product availability"
  - "thay đổi khả dụng"
  - "loại nhật ký"
  - "giá trị miền"
  - "chuỗi cung ứng"
semantic_en: "The Availychglogcat view exposes availability change log categories and their corresponding domain values, which can be used to track and manage changes to product availability in a supply chain."
app_component: CA-ATP-ACL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-ACL
  - interface-view
  - component:CA-ATP-ACL-2CL
  - lob:Cross-Application Components
---
# I_AVAILYCHGLOGCAT

**Availychglogcat**

| Property | Value |
|---|---|
| App Component | `CA-ATP-ACL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AvailabilityChangeLogCategory` | ✓ | |  | `cast ( domvalue_l as atpnetchgcategory )` | `NUMC(2)` | Availability Change Log Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Availability Change Log Category'
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@ObjectModel:{
  dataCategory: #VALUE_HELP,
  representativeKey: 'AvailabilityChangeLogCategory',
  resultSet.sizeCategory: #XS,
  sapObjectNodeType.name: 'ATPAvailabilityChangeLogCat',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SEARCHABLE_ENTITY,
    #SQL_DATA_SOURCE,
    #VALUE_HELP_PROVIDER
  ],
  usageType:{
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_AvailyChgLogCat as select from dd07l
  composition [0..*] of I_AvailyChgLogCatText as _Text
{
  @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as atpnetchgcategory ) as AvailabilityChangeLogCategory,

      @Consumption.hidden: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      domvalue_l                              as DomainValue,

      /* Associations */
      _Text
}
where
      domname  = 'ATPNETCHGCATEGORY'
  and as4local = 'A'
  and as4vers  = '0000'
```
