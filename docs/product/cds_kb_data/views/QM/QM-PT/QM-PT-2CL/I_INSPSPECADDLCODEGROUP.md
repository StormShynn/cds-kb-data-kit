---
name: I_INSPSPECADDLCODEGROUP
description: "Inspspecaddlcodegroup"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSPECADDLCODEGROUP

**Inspspecaddlcodegroup**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspSpecAdditionalCatalog` | ✓ | |  | `katalogart` |  |  |
| `InspSpecAdditionalCodeGroup` | ✓ | |  | `codegruppe` |  |  |
| `CodeGroupIsInactive` |  | |  | `case qpgr.inaktiv when ' ' then cast( ' ' as vdm_qm_codegroupisinactive preserving type ) else cast( 'X' as vdm_qm_codegroupisinactive preserving type ) end` |  |  |
| `CodeGroupStatus` |  | |  | `status` |  |  |
| `_InspSpecAdditionalCatalog` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspSpecAdditionalCatalog` | `I_InspSpecAdditionalCatalog` | [1..1] |
| `_Text` | `I_InspSpecAddlCodeGroupText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Additional Code Group of Master Charc'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        sizeCategory: #M,
        serviceQuality: #A
    },
    representativeKey: 'InspSpecAdditionalCodeGroup'
}
@Analytics.technicalName: 'IINSPADDCODEGRP'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSpecAddlCodeGroup as select from qpgr 

  association [1..1] to I_InspSpecAdditionalCatalog as _InspSpecAdditionalCatalog on $projection.InspSpecAdditionalCatalog = _InspSpecAdditionalCatalog.InspSpecAdditionalCatalog
  association [0..*] to I_InspSpecAddlCodeGroupText as _Text                      on $projection.InspSpecAdditionalCatalog = _Text.InspSpecAdditionalCatalog
                                                                                 and $projection.InspSpecAdditionalCodeGroup = _Text.InspSpecAdditionalCodeGroup

{
      @ObjectModel.foreignKey.association: '_InspSpecAdditionalCatalog'
  key qpgr.katalogart       as InspSpecAdditionalCatalog,
      @ObjectModel.text.association: '_Text'
  key qpgr.codegruppe       as InspSpecAdditionalCodeGroup,
  
      // DB field has three values, but field shall be indicator
      @Semantics.booleanIndicator: true
      case qpgr.inaktiv
        when ' ' then cast( ' ' as vdm_qm_codegroupisinactive preserving type )
        else cast( 'X' as vdm_qm_codegroupisinactive preserving type )
      end                   as CodeGroupIsInactive,
      qpgr.status           as CodeGroupStatus
      
      /* Associations */
      ,_InspSpecAdditionalCatalog
      ,_Text
  
}
where not(
       qpgr.katalogart = '1'
    or qpgr.katalogart = '3'
  )
```
