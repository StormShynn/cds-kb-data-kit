---
name: /DCO/I_DSPUTRELTDACCTGDOCTP
description: Dsputreltdacctgdoctp
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
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# /DCO/I_DSPUTRELTDACCTGDOCTP

**Dsputreltdacctgdoctp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DCoDisputeUUID` | `} key DCoDisputeUUID` |
| key `DCoDsputReltdAcctgDocumentUUID` | `DCoDsputReltdAcctgDocumentUUID` |
| `DCoAccountingDocumentUUID` | `DCoAccountingDocumentUUID` |
| `DCoDisputeAcctgDocCurrency` | `DCoDisputeAcctgDocCurrency` |
| `DCoDsputAcctgDocDsputdAmt` | `} DCoDsputAcctgDocDsputdAmt` |
| `DCoDsputAcctgDocToBeColltdAmt` | `} DCoDsputAcctgDocToBeColltdAmt` |
| `DCoDsputAcctgDocCrrtnAmt` | `} DCoDsputAcctgDocCrrtnAmt` |
| `DCoDsputAcctgDocWrtOffAmt` | `} DCoDsputAcctgDocWrtOffAmt` |
| `DCoDisputeAcctgDocumentReason` | `DCoDisputeAcctgDocumentReason` |
| `DCoDisputeAcctgDocDecision` | `DCoDisputeAcctgDocDecision` |
| `DCoDisputeAcctgDocCategory` | `DCoDisputeAcctgDocCategory` |
| `DCoDisputeAcctgDocCreationUser` | `} DCoDisputeAcctgDocCreationUser` |
| `DCoDsputAcctgDocCrtnDateTime` | `} DCoDsputAcctgDocCrtnDateTime` |
| `DCoDsputAcctgDocLastChgdByUsr` | `} DCoDsputAcctgDocLastChgdByUsr` |
| `DCoDsputAcctgDocLstChgDateTime` | `} DCoDsputAcctgDocLstChgDateTime` |
| `_Dispute` | *Association* |

## Source Code

```abap
@EndUserText: { label: 'Dispute Related Acctg Doc - TP' }
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking:  #BLOCKED_DATA_EXCLUDED } }
@VDM: { viewType: #TRANSACTIONAL,
        usage:    { type: [ #TRANSACTIONAL_PROCESSING_SERVICE ] } }
@Metadata: { allowExtensions:             true,
             ignorePropagatedAnnotations: true }
@ObjectModel: { semanticKey: [ 'DCoAccountingDocumentUUID' ],
                representativeKey: 'DCoDsputReltdAcctgDocumentUUID',
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [ #TRANSACTIONAL_PROVIDER,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE ],
                sapObjectNodeType: { name: 'DCoDsputReltdAcctgDocument' },
                usageType: { dataClass:      #MIXED,
                             sizeCategory:   #XL,
                             serviceQuality: #C } }

define view entity /DCO/I_DsputReltdAcctgDocTP
  as projection on /DCO/R_DsputReltdAcctgDocTP

{

      @Semantics: { uuid: true }
      @ObjectModel: { foreignKey: { association: '_Dispute' } }
  key DCoDisputeUUID,

      @Semantics: { uuid: true }
  key DCoDsputReltdAcctgDocumentUUID,

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

      // Exposed Associations
      _Dispute : redirected to parent /DCO/I_DisputeTP
}
```
