---
name: I_TRANSPCHARGECALCRESLNBASE
description: "Transpchargecalcreslnbase"
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - component:TM-MD-CM-2CL
  - lob:Other
---
# I_TRANSPCHARGECALCRESLNBASE

**Transpchargecalcreslnbase**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeCalcReslnBase` | ✓ | |  | `cast(resolution_base as /scmtms/vdm_tcm_res_base preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics:     { dataCategory:       #DIMENSION,
                  internalName:       #LOCAL }
@Analytics.technicalName: 'ICALCRESBASE'
@Consumption.ranked: true
@EndUserText:{label: 'Charge Calculation Resolution Base'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {sapObjectNodeType.name: 'TranspChargeCalcReslnBase',
                 representativeKey:  'TranspChargeCalcReslnBase',
                 modelingPattern: #ANALYTICAL_DIMENSION,
                 supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE],
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING}}
@Search.searchable: true
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define root view entity I_TranspChargeCalcReslnBase
  as select from /scmtms/c_res_bs
  composition [0..*] of I_TranspChargeCalcReslnBaseT as _Text
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast(resolution_base as /scmtms/vdm_tcm_res_base preserving type) as TranspChargeCalcReslnBase,

      /* Associations */
      _Text
}
```
