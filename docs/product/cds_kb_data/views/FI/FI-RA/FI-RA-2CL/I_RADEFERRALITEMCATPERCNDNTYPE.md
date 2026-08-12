---
name: I_RADEFERRALITEMCATPERCNDNTYPE
description: "RA Deferral Item Category"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RADEFERRALITEMCATPERCNDNTYPE')/$value
semantic_en: "RA Deferral Item Category"
semantic_vi: "RA Deferral Item Categoty — CDS view giao diện dựa trên dd07l."
keywords:
  - "deferral"
  - "item"
  - "categoty"
  - "cndn"
  - "type"
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
# I_RADEFERRALITEMCATPERCNDNTYPE

**RA Deferral Item Category**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RADEFERRALITEMCATPERCNDNTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeferralItemCatPerCndnType` | ✓ | |  | `cast(dd07l.domvalue_l as farr_defitem_special_indicator)` | `CHAR(1)` | Deferral Item Special Indicator |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RADEFERRALITEMCATPERCNDNTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RADEFERRALITEMCATPERCNDNTYPE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IRADFRITMCAT'

@Consumption.ranked: true

@EndUserText.label: 'RA Deferral Item Categoty'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'DeferralItemCatPerCndnType'
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
define root view entity I_RADeferralItemCatPerCndnType
  as select from dd07l

  composition [0..*] of I_RADefrlItmCatPerCndnTypeText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as farr_defitem_special_indicator) as DeferralItemCatPerCndnType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      dd07l.domvalue_l                                         as DomainValue,

      _Text

}
where dd07l.domname  = 'FARR_DEFITEM_SPECIAL_INDICATOR'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
