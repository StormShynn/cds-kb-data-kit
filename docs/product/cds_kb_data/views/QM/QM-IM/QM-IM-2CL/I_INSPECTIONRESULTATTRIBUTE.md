---
name: I_INSPECTIONRESULTATTRIBUTE
description: "Inspectionresultattribute"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
