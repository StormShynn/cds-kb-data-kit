---
name: /DCO/I_DSPUTACCTGDOCUMENTTP
description: Dsputacctgdocumenttp
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-DM
  - interface-view
  - transactional-processing
  - document
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# /DCO/I_DSPUTACCTGDOCUMENTTP

**Dsputacctgdocumenttp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoDisputeUUID` | ✓ | |  |  |  |  |
| `DCoDisputeAccountingDocUUID` | ✓ | |  |  |  |  |
| `DCoAccountingDocumentUUID` |  | |  |  |  |  |
| `DCoDisputeAcctgDocCurrency` |  | |  |  |  |  |
| `DCoDsputAcctgDocDsputdAmt` |  | |  |  |  |  |
| `DCoDsputAcctgDocToBeColltdAmt` |  | |  |  |  |  |
| `DCoDsputAcctgDocCrrtnAmt` |  | |  |  |  |  |
| `DCoDsputAcctgDocWrtOffAmt` |  | |  |  |  |  |
| `DCoDisputeAcctgDocumentReason` |  | |  |  |  |  |
| `DCoDisputeAcctgDocDecision` |  | |  |  |  |  |
| `DCoDisputeAcctgDocCategory` |  | |  |  |  |  |
| `DCoPrelimAccountingDocumentID` |  | |  |  |  |  |
| `DCoPrelimAcctgDocLogicalSystem` |  | |  |  |  |  |
| `DCoDisputeAcctgDocCreationUser` |  | |  |  |  |  |
| `DCoDsputAcctgDocCrtnDateTime` |  | |  |  |  |  |
| `DCoDsputAcctgDocLastChgdByUsr` |  | |  |  |  |  |
| `DCoDsputAcctgDocLstChgDateTime` |  | |  |  |  |  |
| `_Dispute` | | ✓ | | | | |

## Source Code

```abap
@EndUserText: { label: 'Dispute Accounting Document - TP' }
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking:  #BLOCKED_DATA_EXCLUDED } }
@VDM: { viewType: #TRANSACTIONAL,
        usage:    { type: [ #TRANSACTIONAL_PROCESSING_SERVICE ] } }
@ObjectModel: { semanticKey: [ 'DCoDisputeAccountingDocUUID' ],
                representativeKey: 'DCoDisputeAccountingDocUUID',
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [ #TRANSACTIONAL_PROVIDER,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE ],
                sapObjectNodeType: { name: 'DCoDisputeAccountingDocument' },
                usageType: { dataClass:      #MIXED,
                             sizeCategory:   #XL,
                             serviceQuality: #C } }
@Metadata: { allowExtensions:             true,
             ignorePropagatedAnnotations: true }
@AbapCatalog: { extensibility: { extensible: true,
                                 dataSources: [ 'DCoDisputeAccountingDocument' ],
                                 elementSuffix: 'DMR',
                                 quota: { maximumFields: 500,
                                          maximumBytes: 5000 },
                                 allowNewCompositions: false } }

define view entity /DCO/I_DsputAcctgDocumentTP
  as projection on /DCO/R_DsputAcctgDocumentTP as DCoDisputeAccountingDocument
{

      @Semantics: { uuid: true }
      @ObjectModel: { foreignKey: { association: '_Dispute' } }
  key DCoDisputeUUID,

      @Semantics: { uuid: true }
  key DCoDisputeAccountingDocUUID,

      @Semantics: { uuid: true }
      DCoAccountingDocumentUUID,

      DCoDisputeAcctgDocCurrency,

      @Semantics: { amount: { currencyCode: 'DCoDisputeAcctgDocCurrency' } }
      DCoDsputAcctgDocDsputdAmt,

      @Semantics: { amount: { currencyCode: 'DCoDisputeAcctgDocCurrency' } }
      DCoDsputAcctgDocToBeColltdAmt,

      @Semantics: { amount: { currencyCode: 'DCoDisputeAcctgDocCurrency' } }
      DCoDsputAcctgDocCrrtnAmt,

      @Semantics: { amount: { currencyCode: 'DCoDisputeAcctgDocCurrency' } }
      DCoDsputAcctgDocWrtOffAmt,

      DCoDisputeAcctgDocumentReason,
      DCoDisputeAcctgDocDecision,
      DCoDisputeAcctgDocCategory,
      DCoPrelimAccountingDocumentID,
      DCoPrelimAcctgDocLogicalSystem,

      @Semantics: { user: { createdBy: true } }
      DCoDisputeAcctgDocCreationUser,

      @Semantics: { dateTime: true,
                    systemDateTime: { createdAt: true } }
      DCoDsputAcctgDocCrtnDateTime,

      @Semantics: { user: { localInstanceLastChangedBy: true } }
      DCoDsputAcctgDocLastChgdByUsr,

      @Semantics: { dateTime: true,
                    systemDateTime: { localInstanceLastChangedAt: true } }
      DCoDsputAcctgDocLstChgDateTime,

      // Exposed associations
      _Dispute : redirected to parent /DCO/I_DisputeTP

}
```
