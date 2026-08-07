---
name: I_COSTORIGINGROUPTEXT
description: "Costorigingrouptext"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - text-view
  - text
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTORIGINGROUPTEXT

**Costorigingrouptext**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostOriginGroup` | ✓ | |  | `hrkft` |  |  |
| `CostOriginType` | ✓ | |  | `koaty` |  |  |
| `ControllingArea` | ✓ | |  | `cast( kokrs as fis_kokrs preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CostOriginGroupName` |  | |  | `hrktx` |  |  |
| `_Language` | | ✓ | | | | |
| `_CostOriginType` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CostOriginType` | `I_CostOriginType` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cost Origin Group - Text'
@AbapCatalog.sqlViewName: 'IFICOSTORIGROUPT'
@VDM.viewType: #BASIC
@Analytics: { dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #EXTRACTION_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #LANGUAGE_DEPENDENT_TEXT
  ],
  usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #CUSTOMIZING
  },
  representativeKey: 'CostOriginGroup'
}

@Metadata.ignorePropagatedAnnotations: true

define view I_CostOriginGroupText
  as select from tkkh2
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [0..1] to I_CostOriginType  as _CostOriginType  on $projection.CostOriginType = _CostOriginType.CostOriginType
  association [0..1] to I_ControllingArea as _ControllingArea on $projection.ControllingArea = _ControllingArea.ControllingArea
{
  key hrkft                                      as CostOriginGroup,
      @ObjectModel.foreignKey.association: '_CostOriginType'
  key koaty                                      as CostOriginType,
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cast( kokrs as fis_kokrs preserving type ) as ControllingArea,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language' 
  key spras                                      as Language,
      @Semantics.text
      hrktx                                      as CostOriginGroupName,

      _Language,
      _ControllingArea,
      _CostOriginType
};
```
