---
name: I_RACONTRACTPOSTINGMODE
description: "Contract Posting Mode"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACONTRACTPOSTINGMODE')/$value
semantic_en: "Contract Posting Mode"
semantic_vi: "Contract Posting Mode — CDS view giao diện dựa trên dd07l."
keywords:
  - "contract"
  - "posting"
  - "mode"
  - "domain"
  - "value"
tags:
  - FI
  - bo:purchaseorder
  - component:FI-RA-2CL
  - contract
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
---
# I_RACONTRACTPOSTINGMODE

**Contract Posting Mode**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACONTRACTPOSTINGMODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RAContractPostingMode` | ✓ | |  | `cast(dd07l.domvalue_l as farr_posting_mode)` | `CHAR(1)` | Posting Mode |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACONTRACTPOSTINGMODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACONTRACTPOSTINGMODE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

@Consumption.ranked: true

@EndUserText.label: 'Contract Posting Mode'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'RAContractPostingMode'
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
define root view entity I_RAContractPostingMode
  as select from dd07l

  composition [0..*] of I_RAContractPostingModeText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as farr_posting_mode) as RAContractPostingMode,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      dd07l.domvalue_l                            as DomainValue,

      _Text

}
where dd07l.domname  = 'FARR_POSTING_MODE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
