---
name: I_PROFITCENTERTEXT
description: Profit CenterTEXT
app_component: EC-PCA-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EC
  - EC-PCA
  - EC-PCA-MD
  - interface-view
  - text-view
  - profit-center
  - text
  - component:EC-PCA-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_PROFITCENTERTEXT

**Profit CenterTEXT**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cepct.spras` |
| key `ControllingArea` | `cepct.kokrs` |
| key `ProfitCenter` | `cepct.prctr` |
| key `ValidityEndDate` | `cepct.datbi` |
| `ValidityStartDate` | `datab` |
| `ProfitCenterName` | `cast (ktext as fis_prctr_shorttext preserving type)` |
| `ProfitCenterLongName` | `cast (ltext as fac_prctr_ltext preserving type )` |
| `_ControllingAreaText` | *Association* |
| `_Language` | *Association* |
| `_ControllingArea` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Profit Center - Text'
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPROFITCENTERT'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ProfitCenter'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #M
}

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
//--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED
@Consumption.filter.businessDate.at: true

define view I_ProfitCenterText
  as select from cepct
    left outer to one join   cepc as _md on  cepct.prctr = _md.prctr
                             and cepct.kokrs = _md.kokrs
                             and cepct.datbi = _md.datbi


  //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
  association [0..1] to I_ControllingArea as _ControllingAreaText on $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
  association [0..1] to I_Language        as _Language            on $projection.Language = _Language.Language
  association [0..1] to I_ControllingArea as _ControllingArea     on $projection.ControllingArea = _ControllingArea.ControllingArea

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cepct.spras                                         as Language,
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cepct.kokrs                                         as ControllingArea,
      @ObjectModel.text.element: ['ProfitCenterLongName', 'ProfitCenterName']
  key cepct.prctr                                         as ProfitCenter,
      @Semantics.businessDate.to: true
  key cepct.datbi                                         as ValidityEndDate,

      @Semantics.businessDate.from: true
      datab                                               as ValidityStartDate,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast (ktext as fis_prctr_shorttext preserving type) as ProfitCenterName,
      @Semantics.text: true
      cast (ltext as fac_prctr_ltext preserving type )    as ProfitCenterLongName,

      _ControllingArea,
      _Language,
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED

};
```
