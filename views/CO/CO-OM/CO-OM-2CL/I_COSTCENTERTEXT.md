---
name: I_COSTCENTERTEXT
description: "Cost CenterTEXT"
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - text-view
  - cost-center
  - text
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTERTEXT

**Cost CenterTEXT**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostCenter` | ✓ | |  | `kostl` |  |  |
| `ControllingArea` | ✓ | |  | `kokrs` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ValidityEndDate` | ✓ | |  | `datbi` |  |  |
| `ValidityStartDate` |  | | `_md` | `datab` |  |  |
| `CostCenterName` |  | |  | `cast(cskt.ktext as fis_kostl_name preserving type)` |  |  |
| `CostCenterDescription` |  | |  | `cast(cskt.ltext as fis_kostl_ltext preserving type)` |  |  |
| `_ControllingAreaText` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cost Center - Text'
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOSTCENTERT'
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CostCenter'
@AbapCatalog.preserveKey:true

@Metadata.ignorePropagatedAnnotations: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #M
}
@Search.searchable: true
//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED
@Consumption.filter.businessDate.at: true

define view I_CostCenterText
  as select from cskt
    left outer to one join   csks as _md on  cskt.kostl = _md.kostl
                             and cskt.kokrs = _md.kokrs
                             and cskt.datbi = _md.datbi


  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..1] to I_ControllingArea as _ControllingAreaText on $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
  association [0..1] to I_ControllingArea as _ControllingArea     on $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_Language        as _Language            on $projection.Language = _Language.Language

{
      @ObjectModel.text.element: 'CostCenterDescription'
  key cskt.kostl                                     as CostCenter,

      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cskt.kokrs                                     as ControllingArea,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cskt.spras                                     as Language,

      @Semantics.businessDate.to: true
  key cskt.datbi                                     as ValidityEndDate,

      @Semantics.businessDate.from: true
      _md.datab                                      as ValidityStartDate,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast(cskt.ktext as fis_kostl_name preserving type)  as CostCenterName,

      @Semantics.text: true
      cast(cskt.ltext as fis_kostl_ltext preserving type) as CostCenterDescription,

      _ControllingArea,
      _Language,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED


}
```
