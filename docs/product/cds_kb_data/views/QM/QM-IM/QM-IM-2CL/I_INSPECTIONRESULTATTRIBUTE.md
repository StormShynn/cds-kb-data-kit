---
name: I_INSPECTIONRESULTATTRIBUTE
description: "Inspectionresultattribute"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONRESULTATTRIBUTE

**Inspectionresultattribute**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Inspresultattributetext` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPRESATTR'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Inspection Result Attributes' //same as DDL description
@Analytics.dataCategory:#DIMENSION 
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'InspectionResultAttribute'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionResultAttribute 
   as select from tq77
   association [0..*] to I_Inspresultattributetext as _Text 
      on $projection.InspectionResultAttribute = _Text.InspectionResultAttribute 
{
    @ObjectModel.text.association: '_Text'
    key tq77.attribut as InspectionResultAttribute,
    tq77.sortnr as InspResultAttributeSortNmbr,
    case tq77.attribut
      when ' ' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when '<' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when '>' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when '≤' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when '≥' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when '?' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when '(' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when '[' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when '{' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when '~' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when '#' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when 'U' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when 'V' then cast( 'X' as vdm_qattributeisvalid preserving type )
      when 'W' then cast( 'X' as vdm_qattributeisvalid preserving type )
    else cast( ' ' as vdm_qattributeisvalid preserving type )
    end as InspResultAttributeIsValid,
    // Associations
    _Text
}
```
