---
name: I_PERFORMANCEOBLIGATIONROLE
description: "Performance Obligation Role"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFORMANCEOBLIGATIONROLE')/$value
semantic_en: "Performance Obligation Role"
semantic_vi: "Performance Obligation Role — CDS view giao diện dựa trên dd07l."
keywords:
  - "performance"
  - "obligation"
  - "role"
  - "domain"
  - "value"
tags:
  - FI
  - component:FI-RA-2CL
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
---
# I_PERFORMANCEOBLIGATIONROLE

**Performance Obligation Role**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFORMANCEOBLIGATIONROLE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PerformanceObligationRole` | ✓ | |  | `cast(dd07l.domvalue_l as farr_cds_pob_role)` | `CHAR(1)` | Performance Obligation Role |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFORMANCEOBLIGATIONROLE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFORMANCEOBLIGATIONROLE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IRAPOBROLE'

@Consumption.ranked: true

@EndUserText.label: 'Performance Obligation Role'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'PerformanceObligationRole'
@ObjectModel.resultSet.sizeCategory: #XS

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_PerformanceObligationRole
  as select from dd07l

  composition [0..*] of I_PerformanceObligationRoleTxt as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as farr_cds_pob_role) as PerformanceObligationRole,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      dd07l.domvalue_l                            as DomainValue,

      _Text

}
where dd07l.domname  = 'FARR_POB_ROLE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
