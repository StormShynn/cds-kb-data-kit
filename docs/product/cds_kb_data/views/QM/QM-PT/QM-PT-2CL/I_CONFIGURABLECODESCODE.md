---
name: I_CONFIGURABLECODESCODE
description: "Configurablecodescode"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CONFIGURABLECODESCODE

**Configurablecodescode**

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
| `ConfigurableCodesCode` | ✓ | |  | `code` |  |  |
| `ConfigblCodesCodeGrpIsInactv` |  | |  | `case qpcd.inaktiv when ' ' then cast( ' ' as vdm_qm_codeisinactive preserving type ) else cast( 'X' as vdm_qm_codeisinactive preserving type ) end` |  |  |
| `_ConfigurableCodesCatalog` | | ✓ | | | | |
| `_ConfigurableCodesCodeGroup` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConfigurableCodesCatalog` | `I_ConfigurableCodesCatalog` | [1..1] |
| `_ConfigurableCodesCodeGroup` | `I_ConfigurableCodesCodeGroup` | [1..1] |
| `_Text` | `I_ConfigurableCodesCodeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Code of Configurable Codes'
@ObjectModel.representativeKey: 'ConfigurableCodesCode'
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true,
  dataCategory: #DIMENSION
}
@Analytics.internalName:#LOCAL
@VDM: {
    viewType:#BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel:{
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ],
  modelingPattern: #ANALYTICAL_DIMENSION,
  usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING } }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.sapObjectNodeType.name: 'ConfigurableCodesCode'
define view entity I_ConfigurableCodesCode
  as select from qpcd
  association [1..1] to I_ConfigurableCodesCatalog   as _ConfigurableCodesCatalog   on  $projection.ConfigurableCodesCatalog = _ConfigurableCodesCatalog.ConfigurableCodesCatalog
  association [1..1] to I_ConfigurableCodesCodeGroup as _ConfigurableCodesCodeGroup on  $projection.ConfigurableCodesCatalog   = _ConfigurableCodesCodeGroup.ConfigurableCodesCatalog
                                                                                    and $projection.ConfigurableCodesCodeGroup = _ConfigurableCodesCodeGroup.ConfigurableCodesCodeGroup
  association [1..*] to I_ConfigurableCodesCodeText  as _Text                       on  $projection.ConfigurableCodesCatalog   = _Text.ConfigurableCodesCatalog
                                                                                    and $projection.ConfigurableCodesCodeGroup = _Text.ConfigurableCodesCodeGroup
                                                                                    and $projection.ConfigurableCodesCode      = _Text.ConfigurableCodesCode
{
      @ObjectModel.foreignKey.association: '_ConfigurableCodesCatalog'
      @ObjectModel.sapObjectNodeTypeReference: 'ConfigurableCodesCatalog'
  key qpcd.katalogart as ConfigurableCodesCatalog,
      @ObjectModel.foreignKey.association: '_ConfigurableCodesCodeGroup'
  key codegruppe      as ConfigurableCodesCodeGroup,
      @ObjectModel.text.association: '_Text'
  key code            as ConfigurableCodesCode,
      case qpcd.inaktiv
        when ' ' then cast( ' ' as vdm_qm_codeisinactive preserving type )
        else cast( 'X' as vdm_qm_codeisinactive preserving type )
      end             as ConfigblCodesCodeGrpIsInactv,

      //Associations
      _ConfigurableCodesCatalog,
      _ConfigurableCodesCodeGroup,
      _Text

}
where
  qpcd.version = '000001'
```
