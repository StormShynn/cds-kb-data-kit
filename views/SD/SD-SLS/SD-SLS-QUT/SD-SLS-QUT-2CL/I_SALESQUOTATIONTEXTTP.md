---
name: I_SALESQUOTATIONTEXTTP
description: Salesquotationtexttp
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - interface-view
  - transactional-processing
  - sales-quotation
  - text
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATIONTEXTTP

**Salesquotationtexttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesQuotation` | `SalesQuotationText.SalesQuotation` |
| key `Language` | `SalesQuotationText.Language` |
| key `LongTextID` | `SalesQuotationText.LongTextID` |
| `LongTextIDForEdit` | `SalesQuotationText.LongTextIDForEdit` |
| `LanguageForEdit` | `SalesQuotationText.LanguageForEdit` |
| `LongText` | `SalesQuotationText.LongText` |
| `SalesQuotationType` | `SalesQuotationText.SalesQuotationType` |
| `SalesOrganization` | `SalesQuotationText.SalesOrganization` |
| `DistributionChannel` | `SalesQuotationText.DistributionChannel` |
| `OrganizationDivision` | `SalesQuotationText.OrganizationDivision` |
| `_SalesQuotation` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Sales Quotation - Text TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesQuotation', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_SalesQuotationTextTP 
  as projection on R_SalesQuotationTextTP as SalesQuotationText {
  key SalesQuotationText.SalesQuotation,
  @Semantics.language:true  
  key SalesQuotationText.Language,
  key SalesQuotationText.LongTextID, 
  
  @ObjectModel.editableFieldFor: 'LongTextID'
  SalesQuotationText.LongTextIDForEdit,    
  @Semantics.language:true  
  @ObjectModel.editableFieldFor: 'Language'
  SalesQuotationText.LanguageForEdit, 
  @Semantics.text:true
  SalesQuotationText.LongText,       

  //    DCL
  @Consumption.hidden: true
  SalesQuotationText.SalesQuotationType,
  @Consumption.hidden: true
  SalesQuotationText.SalesOrganization,
  @Consumption.hidden: true
  SalesQuotationText.DistributionChannel,
  @Consumption.hidden: true
  SalesQuotationText.OrganizationDivision,
  
  //Composition
  _SalesQuotation : redirected to parent I_SalesQuotationTP     
}
```
