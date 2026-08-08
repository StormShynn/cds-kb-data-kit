---
name: I_LGLTRANSDOCLINKAPI01
description: "Lgltransdoclinkapi 01"
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - interface-view
  - component:CM-LT-2CL
  - lob:Other
---
# I_LGLTRANSDOCLINKAPI01

**Lgltransdoclinkapi 01**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionDocLinkUUID` | ✓ | |  |  |  |  |
| `LegalTransactionUUID` |  | |  |  |  |  |
| `LglCntntMDocument` |  | |  |  |  |  |
| `_LegalTransaction` | | ✓ | | | | |
| `_LegalDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |
| `_LegalDocument` | `I_LegalDocumentAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILTDOCLNKAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType : #BASIC

@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel: {
  representativeKey: 'LegalTransactionDocLinkUUID',
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #L,
  usageType.dataClass: #TRANSACTIONAL
}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Linked Documents of Legal Transaction'
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view I_LglTransDocLinkAPI01
  as select from I_LegalTransDocLinkBase
  association [1..1] to I_LegalTransactionAPI01 as _LegalTransaction on  $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID
  association [1..1] to I_LegalDocumentAPI01    as _LegalDocument    on  $projection.LglCntntMDocument                = _LegalDocument.LglCntntMDocument
                                                                     and _LegalDocument.LglCntntMDocumentIsTopVersion = 'X'
{
  key LegalTransactionDocLinkUUID,
      LegalTransactionUUID,
      LglCntntMDocument,

      /* Associations */
      _LegalTransaction,
      _LegalDocument
}
where
  _LegalTransaction.IsEndOfPurposeBlocked = ''
```
