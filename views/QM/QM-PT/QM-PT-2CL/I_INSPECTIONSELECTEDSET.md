---
name: I_INSPECTIONSELECTEDSET
description: Inspectionselectedset
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - inspection
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONSELECTEDSET

**Inspectionselectedset**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SelectedCodeSetPlant` | `qpam.werks` |
| key `InspectionCatalog` | `qpam.katalogart` |
| key `SelectedCodeSet` | `qpam.auswahlmge` |
| `Language` | `case when qpamtxt.language is not null then qpamtxt.language else cast( $session.system_language as spras preserving type ) end` |
| `SelectedCodeSetText` | `case when qpamtxt.language is not null then cast( qpamtxt.ktx01 as vdm_qktextam preserving type ) else cast( qpam.ktx01 as vdm_qktextam preserving type ) end` |
| `InspectionSelectedSetStatus` | `qpam.status` |
| `SelectedCodeSetDfltCodeGroup` | `qpam.defaultcodegr` |
| `SelectedCodeSetDefaultCode` | `qpam.defaultcode` |
| `_SelectedCodeSetPlant` | *Association* |
| `_InspectionCatalog` | *Association* |
| `_InspectionSelectedSetText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SelectedCodeSetPlant` | `I_Plant` | [0..1] |
| `_InspectionCatalog` | `I_Inspectioncatalog` | [0..1] |
| `_InspectionSelectedSetText` | `I_InspectionSelectedSetText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPSELDSET'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK  
@EndUserText.label: 'Inspection Selected Set'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        sizeCategory: #M,
        serviceQuality: #A 
    },
    representativeKey: 'SelectedCodeSet'
}
@Metadata.ignorePropagatedAnnotations: true

define view I_InspectionSelectedSet 
  as select from qpam
            left outer join qpamtxt
              on  qpamtxt.werks      = qpam.werks
              and qpamtxt.katalogart = qpam.katalogart
              and qpamtxt.auswahlmge = qpam.auswahlmge
              and qpamtxt.language   = $session.system_language

   association [0..1] to I_Plant as _SelectedCodeSetPlant
      on $projection.SelectedCodeSetPlant = _SelectedCodeSetPlant.Plant
      
   association [0..1] to I_Inspectioncatalog as _InspectionCatalog
      on $projection.InspectionCatalog = _InspectionCatalog.InspectionCatalog
      
   association [0..*] to I_InspectionSelectedSetText as _InspectionSelectedSetText                // => DEPRECATED! Do not use. Use fields Language and SelectedCodeSetText directly.
      on $projection.SelectedCodeSetPlant = _InspectionSelectedSetText.SelectedCodeSetPlant and
         $projection.InspectionCatalog   = _InspectionSelectedSetText.InspectionCatalog and
         $projection.SelectedCodeSet = _InspectionSelectedSetText.SelectedCodeSet
{
    @ObjectModel.foreignKey.association: '_SelectedCodeSetPlant'
    key qpam.werks      as SelectedCodeSetPlant,
    @ObjectModel.foreignKey.association: '_InspectionCatalog'
    key qpam.katalogart as InspectionCatalog,
    @ObjectModel.text.element:  [ 'SelectedCodeSetText' ] 
    key qpam.auswahlmge as SelectedCodeSet,

    // Compatibility Switch: IF QPAMTXT contains no text in current logon language we use QPAM-KTX01 as default text.
    // In case we use the default text the $session.system_language is used as "artificial" language code.
    @UI.hidden: true
    case when qpamtxt.language is not null
      then qpamtxt.language
      else cast( $session.system_language as spras preserving type ) // qpam.ksp01
    end as Language,
    @Semantics.text: true
    case when qpamtxt.language is not null
      then cast( qpamtxt.ktx01 as vdm_qktextam preserving type )
      else cast( qpam.ktx01 as vdm_qktextam preserving type )
    end as SelectedCodeSetText,

//    qpam.ltextv, 
//    qpam.ersteller, 
//    qpam.e_datum, 
//    qpam.aenderer, 
//    qpam.a_datum, 
//    qpam.verwendung, 
    @UI.hidden: true // At the moment we do not have a proper VDM model for the domain QLOESCHKZ1 => hide this field on UIs
    qpam.status           as InspectionSelectedSetStatus,
    qpam.defaultcodegr    as SelectedCodeSetDfltCodeGroup,
    qpam.defaultcode      as SelectedCodeSetDefaultCode,

    /* Associations */
    @Consumption.filter.hidden: true
    _SelectedCodeSetPlant,
    @Consumption.filter.hidden: true
    _InspectionCatalog,
    @Consumption.filter.hidden: true
    _InspectionSelectedSetText
   
}
```
