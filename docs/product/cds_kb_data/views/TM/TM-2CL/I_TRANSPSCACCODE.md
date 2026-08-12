---
name: I_TRANSPSCACCODE
description: "Transpscaccode"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPSCACCODE

**Transpscaccode**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspSCACCode` | ✓ | |  | `scac` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@EndUserText:   {label: 'Transportation SCAC Code'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'ITSCACC'
@ObjectModel:   {representativeKey:     'TranspSCACCode',
                 usageType:             {serviceQuality: #A,
                                         sizeCategory:   #S,
                                         dataClass:      #CUSTOMIZING},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:       {allowExtensions:   true,
                 ignorePropagatedAnnotations: true}
@ObjectModel.sapObjectNodeType.name: 'StandardCarrierAlphaCode'
define root view entity I_TranspSCACCode
  as select from /scmtms/c_scac
  composition [0..*] of I_TranspSCACCodeText as _Text
{
      @ObjectModel.text.association: '_Text'
  key scac as TranspSCACCode,

      /* Associations */
      _Text
}
```
