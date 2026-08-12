---
name: I_CNSLDTNBILLINGDOCTYPETEXTTP
description: "CNSLDTNBilling DocumentTYPETEXTTP"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - transactional-processing
  - billing-document
  - billing
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNBILLINGDOCTYPETEXTTP

**CNSLDTNBilling DocumentTYPETEXTTP**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Text` | `Language` |  |  |
| `BillingDocumentType` | ✓ | | `_Text` | `BillingDocumentType` |  |  |
| `BillingDocumentTypeName` |  | | `_Text` | `BillingDocumentTypeName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnBillingDocumentTypeTP` |  | |  | `_BillingDocumentType as _BillingDocumentType : redirected to parent I_CnsldtnBillingDocumentTypeTP` |  |  |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #TRANSACTIONAL_INTERFACE,
//  sapObjectNodeType:{
//    name: 'CnsldtnBillingDocumentTypeText'
//  },
  semanticKey: [
    'Language',
    'BillingDocumentType'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Cnsldtn Billing Document Type - Text TP'
define view entity I_CnsldtnBillingDocTypeTextTP
  as projection on R_CnsldtnBillingDocTypeTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.BillingDocumentType,

      @Semantics.text
      _Text.BillingDocumentTypeName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _BillingDocumentType as _BillingDocumentType : redirected to parent I_CnsldtnBillingDocumentTypeTP

}
```
