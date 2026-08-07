---
name: I_QUALITYCERTIFICATETYPET
description: "Qualitycertificatetypet"
app_component: QM-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-CA
  - interface-view
  - component:QM-CA-2CL
  - lob:Quality Management
---
# I_QUALITYCERTIFICATETYPET

**Qualitycertificatetypet**

| Property | Value |
|---|---|
| App Component | `QM-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `sprache` |  |  |
| `QualityCertificateType` | ✓ | |  | `zgtyp` |  |  |
| `QualityCertificateTypeText` |  | |  | `kurztext` |  |  |
| `_QualityCertificateType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QualityCertificateType` | `I_QualityCertificateType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Quality Certificate Type - Text'
@ObjectModel.representativeKey: 'QualityCertificateType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IQLTYCERTTYPET'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view entity I_QualityCertificateTypeT as select from tq05t
    association [0..1] to I_QualityCertificateType as _QualityCertificateType on $projection.QualityCertificateType = _QualityCertificateType.QualityCertificateType
    association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language  
   
 
   {
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key sprache as Language,
    key zgtyp as QualityCertificateType,
    @Semantics.text: true
    kurztext as QualityCertificateTypeText,
    _Language,
    _QualityCertificateType
   }
```
