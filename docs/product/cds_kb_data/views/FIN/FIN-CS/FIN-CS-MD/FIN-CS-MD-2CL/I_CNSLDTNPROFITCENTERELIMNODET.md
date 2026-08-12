---
name: I_CNSLDTNPROFITCENTERELIMNODET
description: "CNSLDTNProfit CenterELIMNODET"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - profit-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_CNSLDTNPROFITCENTERELIMNODET

**CNSLDTNProfit CenterELIMNODET**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_nodet` | `spras` |  |  |
| `ControllingArea` | ✓ | |  | `cast(_nodet.kokrs as fincs_controllingarea preserving type )` |  |  |
| `ProfitCenter` | ✓ | |  | `cast(left(_nodet.nodevalue, 25) as fincs_elim_profitcenter preserving type )` |  |  |
| `ProfitCenterName` |  | |  | `cast(left(_nodet.nodetxt, 50) as fincs_profitcenter_desc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_ProfitCenter` | `I_CnsldtnProfitCenterElimNode` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSPCELIMNODT',
  compiler.compareFilter: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M},
  representativeKey: 'ProfitCenter',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Profit Center Elim Node - Text'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnProfitCenterElimNodeT
  as select from P_CnsldtnProfitCenterElimNodeT as _nodet

  association [1..1] to I_Language                    as _Language        on  $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnControllingArea      as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [1..1] to I_CnsldtnProfitCenterElimNode as _ProfitCenter    on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                          and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _nodet.spras                                                                 as Language,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key cast(_nodet.kokrs as fincs_controllingarea preserving type )                 as ControllingArea,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
  key cast(left(_nodet.nodevalue, 25) as fincs_elim_profitcenter preserving type ) as ProfitCenter,

      @Semantics.text
      cast(left(_nodet.nodetxt, 50) as fincs_profitcenter_desc preserving type )   as ProfitCenterName,


      _Language,
      _ControllingArea,
      _ProfitCenter
}
```
