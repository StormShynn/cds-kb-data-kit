---
name: I_CADOCUMENTTYPE
description: Cadocumenttype
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - document
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENTTYPE

**Cadocumenttype**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CADocumentType` | ✓ | |  | `blart` |
| `CAApplicationArea` | ✓ | |  | `applk` |
| `CACrossCompCodePostgIsAllowed` |  | |  | `xgsub` |
| `CAManualPostingIsForbidden` |  | |  | `xintf` |
| `CANegativePostingCode` |  | |  | `negbl` |
| `_ApplArea` |  | |  | `_CAApplicationArea` |
| `_CAApplicationArea` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_Text` | `I_CADocumentTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics : { dataCategory: #DIMENSION,
               dataExtraction.enabled : true}

@EndUserText.label: 'Document Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CADocumentType',
                sapObjectNodeType.name: 'ContrAcctgDocumentType',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #CUSTOMIZING } }

@VDM.viewType: #BASIC

define view entity I_CADocumentType
  as select from tfk003

  association [1..1] to I_CAApplicationArea  as _CAApplicationArea on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..*] to I_CADocumentTypeText as _Text              on  $projection.CADocumentType    = _Text.CADocumentType
                                                                   and $projection.CAApplicationArea = _Text.CAApplicationArea
{
      @ObjectModel.text.association: '_Text'
  key tfk003.blart as CADocumentType,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key tfk003.applk as CAApplicationArea,

      tfk003.xgsub as CACrossCompCodePostgIsAllowed,
      tfk003.xintf as CAManualPostingIsForbidden,
      tfk003.negbl as CANegativePostingCode,

      /* only technical fields:
            tfk003.numkr,
            tfk003.bllfz,
            tfk003.arclfz,
      */

      /* associations */
      _CAApplicationArea,
      _Text,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAApplicationArea'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAApplicationArea'
      _CAApplicationArea as _ApplArea 
}
where
  applk = 'C'
```
