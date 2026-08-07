---
name: I_CHARCATTRIBSELECTEDCODESET
description: Charcattribselectedcodeset
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_CHARCATTRIBSELECTEDCODESET

**Charcattribselectedcodeset**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SelectedCodeSetPlant` | ✓ | |  | `werks` |  |  |
| `SelectedCodeSet` | ✓ | |  | `auswahlmge` |  |  |
| `Language` |  | |  | `case when qpamtxt.language is not null then qpamtxt.language else cast( $session.system_language as spras preserving type ) end` |  |  |
| `SelectedCodeSetText` |  | |  | `case when qpamtxt.language is not null then qpamtxt.ktx01 else qpam.ktx01 end` |  |  |
| `InspectionSelectedSetStatus` |  | |  | `status` |  |  |
| `CharcAttribSeldSetCreatedBy` |  | |  | `ersteller` |  |  |
| `CharcAttribSeldSetCrtedOn` |  | |  | `e_datum` |  |  |
| `CharcAttribSeldSetLastChgdBy` |  | |  | `aenderer` |  |  |
| `CharcAttribSeldSetLastChgdOn` |  | |  | `a_datum` |  |  |
| `_CharcAttribSelectedSetCode` | | ✓ | | | | |
| `_SelectedCodeSetPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CharcAttribSelectedSetCode` | `I_CharcAttribSelectedSetCode` | [0..*] |
| `_SelectedCodeSetPlant` | `I_Plant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICHATTSELDCDSET'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Selected Set for Characteristic Attribute'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'SelectedCodeSet'
@ObjectModel.usageType: {
    dataClass: #MASTER,
    sizeCategory: #S,
    serviceQuality: #A
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view I_CharcAttribSelectedCodeSet 
  as select from qpam
            left outer join qpamtxt
            on  qpamtxt.werks      = qpam.werks
              and qpamtxt.katalogart = qpam.katalogart
              and qpamtxt.auswahlmge = qpam.auswahlmge
              and qpamtxt.language   = $session.system_language
              
  association [0..*] to I_CharcAttribSelectedSetCode as _CharcAttribSelectedSetCode
    on $projection.SelectedCodeSetPlant  = _CharcAttribSelectedSetCode.SelectedCodeSetPlant
    and $projection.SelectedCodeSet      = _CharcAttribSelectedSetCode.SelectedCodeSet
  association [0..1] to I_Plant                      as _SelectedCodeSetPlant        
    on  $projection.SelectedCodeSetPlant = _SelectedCodeSetPlant.Plant

{
    @ObjectModel.foreignKey.association: '_SelectedCodeSetPlant'
    @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
    key qpam.werks      as SelectedCodeSetPlant,
    //key katalogart as CharacteristicAttributeCatalog, --> WHERE condition
    @ObjectModel.text.element:  [ 'SelectedCodeSetText' ] 
    @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
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
      then qpamtxt.ktx01
      else qpam.ktx01
    end as SelectedCodeSetText,
    
    @UI.hidden: true // At the moment we do not have a proper VDM model for the domain QLOESCHKZ1 => hide this field on UIs
    status         as InspectionSelectedSetStatus,
    
    @Semantics.user.createdBy: true
    @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #MEDIUM }
    ersteller      as CharcAttribSeldSetCreatedBy,
    @Semantics.businessDate.at: true
    @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #MEDIUM }
    e_datum        as CharcAttribSeldSetCrtedOn,
    @Semantics.user.lastChangedBy: true
    @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #MEDIUM }
    aenderer       as CharcAttribSeldSetLastChgdBy,
    @Semantics.businessDate.at: true
    @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #MEDIUM }
    a_datum        as CharcAttribSeldSetLastChgdOn,
    
    //Associations
    @Consumption.filter.hidden: true
    _CharcAttribSelectedSetCode,
    @Consumption.filter.hidden: true
    _SelectedCodeSetPlant
    
}
where qpam.katalogart = '1'
```
