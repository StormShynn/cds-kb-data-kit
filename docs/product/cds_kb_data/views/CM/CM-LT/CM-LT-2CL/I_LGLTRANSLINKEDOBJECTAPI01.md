---
name: I_LGLTRANSLINKEDOBJECTAPI01
description: "Lgltranslinkedobjectapi 01"
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
# I_LGLTRANSLINKEDOBJECTAPI01

**Lgltranslinkedobjectapi 01**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionLinkdObjUUID` | ✓ | |  |  |  |  |
| `LglCntntMLinkdObjType` |  | |  |  |  |  |
| `LglCntntMLinkdObj` |  | |  |  |  |  |
| `LegalTransactionUUID` |  | |  |  |  |  |
| `LegalTransactionMandatoryFlag` |  | |  |  |  |  |
| `LegalTransactionIsTriggerObj` |  | |  |  |  |  |
| `LglCntntMIsIntegRelevant` |  | |  |  |  |  |
| `LglCntntMIsAddedByIntegVarbl` |  | |  |  |  |  |
| `_LegalTransaction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |
| `_LegalTransLinkedObjectExtn` | `E_LegalTransactionLinkedObject` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILTLINKOBJAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LegalTransactionLinkdObjUUID',
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #L,
  usageType.dataClass:  #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]



@EndUserText.label: 'Linked Objects of Legal Transaction'

define view I_LglTransLinkedObjectAPI01
  as select from I_LegalTrLinkedObjects
  association [1..1] to I_LegalTransactionAPI01        as _LegalTransaction           on $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID

  // Extension
  association [1..1] to E_LegalTransactionLinkedObject as _LegalTransLinkedObjectExtn on $projection.LegalTransactionLinkdObjUUID = _LegalTransLinkedObjectExtn.LegalTransactionLinkdObjUUID
{
  key LegalTransactionLinkdObjUUID,
      LglCntntMLinkdObjType,
      LglCntntMLinkdObj,
      LegalTransactionUUID,
      LegalTransactionMandatoryFlag,
      LegalTransactionIsTriggerObj,
      LglCntntMIsIntegRelevant,
      @Semantics.booleanIndicator: true
      LglCntntMIsAddedByIntegVarbl,
      /* Associations */
      _LegalTransaction
}

where
  _LegalTransaction.IsEndOfPurposeBlocked = ''
```
