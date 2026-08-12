---
name: I_CNSLDTNBILLINGDOCUMENTTYPEVH
description: "CNSLDTNBilling DocumentUMENTTYPEVH"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - billing-document
  - billing
  - document
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:BillingDocument
---
# I_CNSLDTNBILLINGDOCUMENTTYPEVH

**CNSLDTNBilling DocumentUMENTTYPEVH**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentType` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSBILLDOCTYPEVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions: true, 
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'BillingDocumentType',
  semanticKey: ['BillingDocumentType'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Cnsldtn Combined Billing Document Type'

define view I_CnsldtnBillingDocumentTypeVH
  as select from I_CnsldtnBillingDocumentType as _CnsldtnBillingDocumentType

{
      @ObjectModel.text.element: ['BillingDocumentTypeName']
  key BillingDocumentType,

      @Semantics.text
      _CnsldtnBillingDocumentType._Text[1: Language=$session.system_language].BillingDocumentTypeName
}
```
