---
name: I_LEGALDOCUMENTAPI01
description: Legaldocumentapi 01
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - interface-view
  - document
  - component:CM-DOC-2CL
  - lob:Other
---
# I_LEGALDOCUMENTAPI01

**Legaldocumentapi 01**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LglCntntMDocumentUUID` | ✓ | |  |  |
| `LglCntntMDocument` |  | |  |  |
| `LglCntntMDocumentIsTopVersion` |  | |  |  |
| `LegalTransaction` |  | |  |  |
| `LegalTransactionUUID` |  | |  |  |
| `LglCntntMDocContentType` |  | |  |  |
| `LglCntntMDocAccessLvl` |  | |  |  |
| `InternalDocumentStatus` |  | |  |  |
| `LglCntntMLanguage` |  | |  |  |
| `DocumentDescription` |  | |  |  |
| `LglCntntMIsMandatory` |  | |  |  |
| `DocumentVersion` |  | |  |  |
| `LegalDocumentVersion` |  | |  |  |
| `LglCntntMChangedByUser` |  | |  |  |
| `LglCntntMChangedUTCDateTime` |  | |  |  |
| `LglCntntMCreatedByUser` |  | |  |  |
| `LglCntntMCreatedUTCDateTime` |  | |  |  |
| `_LegalTransaction` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |
| `_Extension` | `E_LegalDocument` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILEGALDOCAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType : #BASIC

@ObjectModel: {
  semanticKey               : ['LglCntntMDocument','LegalDocumentVersion'],
  representativeKey         : 'LglCntntMDocumentUUID',
  usageType.serviceQuality  : #A,
  usageType.sizeCategory    : #L,
  usageType.dataClass       : #TRANSACTIONAL,
  sapObjectNodeType.name    : 'LegalDocument'
}

@Metadata.ignorePropagatedAnnotations:true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Legal Document'
define view I_LegalDocumentAPI01
  as select from I_LegalDocument
  association [1..1] to I_LegalTransactionAPI01 as _LegalTransaction on $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID
  association [1..1] to E_LegalDocument         as _Extension        on $projection.LglCntntMDocumentUUID = _Extension.LglCntntMDocumentUUID
{

  key LglCntntMDocumentUUID,

      LglCntntMDocument,
      LglCntntMDocumentIsTopVersion,
      LegalTransaction,
      LegalTransactionUUID,
      LglCntntMDocContentType,
      LglCntntMDocAccessLvl,
      InternalDocumentStatus,
      LglCntntMLanguage,
      DocumentDescription,
      LglCntntMIsMandatory,
      @API.element.releaseState:#DEPRECATED
      @API.element.successor:'LegalDocumentVersion'
      DocumentVersion,
      LegalDocumentVersion, //new field for document version number(NUMC4)

      // Administrative Data
      LglCntntMChangedByUser,
      LglCntntMChangedUTCDateTime,
      LglCntntMCreatedByUser,
      LglCntntMCreatedUTCDateTime,

      /* Associations */
      _LegalTransaction
}
where

     IsEndOfPurposeBlocked = ''
  or IsEndOfPurposeBlocked is null
```
