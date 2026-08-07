---
name: I_TRANSPORDEXECUTIONISBLOCKED
description: Transpordexecutionisblocked
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - interface-view
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDEXECUTIONISBLOCKED

**Transpordexecutionisblocked**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspOrdExecutionIsBlocked` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_block_execution preserving type )` |
| `_Text` | | ✓ | | |

## Source Code

```abap
@EndUserText:   {label:                   'Transportation Order Execution Block'}
@Analytics:     {dataCategory:             #DIMENSION,
                 dataExtraction:          {enabled: true},
                 internalName:             #LOCAL }
@Analytics.technicalName: 'IEXECBLOCK'
@ObjectModel:   {representativeKey:       'TranspOrdExecutionIsBlocked',
                 usageType:               {serviceQuality: #A,
                                           sizeCategory:   #S,
                                           dataClass:      #META},
                 modelingPattern:          #ANALYTICAL_DIMENSION,
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
@ObjectModel.resultSet.sizeCategory:#XS
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}
@ObjectModel.sapObjectNodeType.name: 'TranspOrderExecutionBlock'
define root view entity I_TranspOrdExecutionIsBlocked
  as select from dd07l
  composition [0..*] of I_TranspOrdExecutionBlockText as _Text
{
      @ObjectModel.text.association: '_Text'
      @Semantics.booleanIndicator: true
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_block_execution preserving type ) as TranspOrdExecutionIsBlocked,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/BLOCK_EXECUTION'
  and as4local = 'A';
```
