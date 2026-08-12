---
name: I_CONFIGURABLECODESCODEGROUP
description: "Configurablecodescodegroup"
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
# I_CONFIGURABLECODESCODEGROUP

**Configurablecodescodegroup**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConfigurableCodesCatalog` | ✓ | |  | `katalogart` |  |  |
| `ConfigurableCodesCodeGroup` | ✓ | |  | `codegruppe` |  |  |
| `ConfigblCodesCodeGrpIsInactv` |  | |  | `case qpgr.inaktiv when ' ' then cast( ' ' as vdm_qm_codegroupisinactive preserving type ) else cast( 'X' as vdm_qm_codegroupisinactive preserving type ) end` |  |  |
| `ConfigblCodesCodeGroupStatus` |  | |  | `status` |  |  |
| `_ConfigurableCodesCatalog` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ConfigurableCodesCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConfigurableCodesCatalog` | `I_ConfigurableCodesCatalog` | [1..1] |
| `_Text` | `I_ConfigblCodesCodeGroupText` | [1..*] |
| `_ConfigurableCodesCode` | `I_ConfigurableCodesCode` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'ConfigurableCodesCodeGroup'
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true,
  dataCategory: #DIMENSION
}
@Analytics.internalName:#LOCAL
@EndUserText.label: 'Code Group of Configurable Codes'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel:{
    supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION }
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.sapObjectNodeType.name: 'ConfigurableCodesCodeGroup'
define view entity I_ConfigurableCodesCodeGroup
  as select from qpgr
  association [1..1] to I_ConfigurableCodesCatalog   as _ConfigurableCodesCatalog on  $projection.ConfigurableCodesCatalog = _ConfigurableCodesCatalog.ConfigurableCodesCatalog

  association [1..*] to I_ConfigblCodesCodeGroupText as _Text                     on  $projection.ConfigurableCodesCatalog   = _Text.ConfigurableCodesCatalog
                                                                                  and $projection.ConfigurableCodesCodeGroup = _Text.ConfigurableCodesCodeGroup
  association [1..*] to I_ConfigurableCodesCode      as _ConfigurableCodesCode    on  $projection.ConfigurableCodesCatalog   = _ConfigurableCodesCode.ConfigurableCodesCatalog
                                                                                  and $projection.ConfigurableCodesCodeGroup = _ConfigurableCodesCode.ConfigurableCodesCodeGroup

{
      @ObjectModel.foreignKey.association: '_ConfigurableCodesCatalog'
      @ObjectModel.sapObjectNodeTypeReference: 'ConfigurableCodesCatalog'
  key qpgr.katalogart as ConfigurableCodesCatalog,
      @ObjectModel.text.association: '_Text'
  key qpgr.codegruppe as ConfigurableCodesCodeGroup,
      case qpgr.inaktiv
        when ' ' then cast( ' ' as vdm_qm_codegroupisinactive preserving type )
        else cast( 'X' as vdm_qm_codegroupisinactive preserving type )
      end             as ConfigblCodesCodeGrpIsInactv,
      qpgr.status     as ConfigblCodesCodeGroupStatus,

      //Associations
      _ConfigurableCodesCatalog,
      _ConfigurableCodesCode,
      _Text
}
```
