---
name: I_BILLINGDOCUMENTREQUESTTEXTTP
description: Billing DocumentUMENTREQUESTTEXTTP
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - transactional-processing
  - billing-document
  - billing
  - document
  - text
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTREQUESTTEXTTP

**Billing DocumentUMENTREQUESTTEXTTP**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentRequest` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `_BillingDocumentRequest` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Billing Document Request - Text TP'

@AccessControl: {
  authorizationCheck: #MANDATORY,  
  personalData.blocking: #('TRANSACTIONAL_DATA')

}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType: {
      dataClass:      #TRANSACTIONAL,
      serviceQuality: #C,
      sizeCategory:   #L
    },
    semanticKey: ['BillingDocumentRequest', 'Language', 'LongTextID'],
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_BillingDocumentRequestTextTP 
  as projection on R_BillingDocumentRequestTextTP
{
  key BillingDocumentRequest,
  @Semantics.language:true  
  key Language,
  key LongTextID,
  @Semantics.text:true
  LongText,  
  
  _BillingDocumentRequest : redirected to parent I_BillingDocumentRequestTP
}
```
