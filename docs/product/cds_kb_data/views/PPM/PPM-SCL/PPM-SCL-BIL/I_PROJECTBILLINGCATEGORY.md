---
name: I_PROJECTBILLINGCATEGORY
description: "Projectbillingcategory"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - billing
  - project
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# I_PROJECTBILLINGCATEGORY

**Projectbillingcategory**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectBillingCategory` | ✓ | |  | `cast( substring( domvalue_l, 1, 4 ) as prflcat preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_ProjectBillingCategoryText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project Billing Category'
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPBRBILLGCAT'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.sapObjectNodeType.name: 'ProjectBillingCategory'
@ObjectModel.representativeKey: 'ProjectBillingCategory'
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations: true


define root view entity I_ProjectBillingCategory
  as select from dd07l
  composition [0..*] of I_ProjectBillingCategoryText as _ProjectBillingCategoryText
{

      @ObjectModel.text.association: '_ProjectBillingCategoryText'
  key cast( substring( domvalue_l, 1, 4 ) as prflcat preserving type ) as ProjectBillingCategory,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07l.domvalue_l                                                 as DomainValue,

      _ProjectBillingCategoryText

}
where
      domname  = 'PRFLCAT'
  and as4local = 'A'
```
