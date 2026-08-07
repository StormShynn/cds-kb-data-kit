---
name: I_COSTORIGINGROUP
description: Costorigingroup
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
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTORIGINGROUP

**Costorigingroup**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `cast( kokrs as fis_kokrs preserving type )` |
| `CostOriginType` | ✓ | |  | `koaty` |
| `CostOriginGroup` | ✓ | |  | `hrkft` |
| `_Text` | | ✓ | | |
| `_ControllingArea` | | ✓ | | |
| `_CostOriginType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostOriginGroupText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_CostOriginType` | `I_CostOriginType` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cost Origin Group'
@AbapCatalog.sqlViewName: 'IFICOSTORIGROUP'
@VDM.viewType: #BASIC
@Analytics: { 
  dataCategory: #DIMENSION, 
  dataExtraction.enabled: true 
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  representativeKey: 'CostOriginGroup',
  sapObjectNodeType.name: 'CostOriginGroup',
  supportedCapabilities: [ 
    #EXTRACTION_DATA_SOURCE, 
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET, 
    #SQL_DATA_SOURCE, 
    #CDS_MODELING_DATA_SOURCE 
  ],
  modelingPattern: #ANALYTICAL_DIMENSION,
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S 
  }
}

@Search.searchable: true

@Metadata: { 
  allowExtensions: true,
  ignorePropagatedAnnotations: true 
}

define view I_CostOriginGroup
  as select from tkkh1

  association [0..*] to I_CostOriginGroupText as _Text            on  $projection.ControllingArea = _Text.ControllingArea
                                                                  and $projection.CostOriginGroup = _Text.CostOriginGroup
                                                                  and $projection.CostOriginType  = _Text.CostOriginType

  association [0..1] to I_ControllingArea     as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_CostOriginType      as _CostOriginType  on  $projection.CostOriginType = _CostOriginType.CostOriginType


{
      @Search.defaultSearchElement: true
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cast( kokrs as fis_kokrs preserving type ) as ControllingArea,
      @Search.defaultSearchElement: true
      @ObjectModel.foreignKey.association: '_CostOriginType'
  key koaty                                      as CostOriginType,
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key hrkft                                      as CostOriginGroup,

      _Text,
      _ControllingArea,
      _CostOriginType
};
```
