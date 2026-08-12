---
name: I_SALESQUOTATIONITEMTEXTTP
description: "Salesquotationitemtexttp"
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
  - item-level
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATIONITEMTEXTTP

**Salesquotationitemtexttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotation` | ✓ | |  |  |  |  |
| `SalesQuotationItem` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongTextIDForEdit` |  | |  |  |  |  |
| `LanguageForEdit` |  | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `SalesQuotationType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_SalesQuotation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Item - Text TP'

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
   semanticKey: ['SalesQuotation', 'SalesQuotationItem', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_SalesQuotationItemTextTP
  as projection on R_SalesQuotationItemTextTP as SalesQuotationItemText
{

  key SalesQuotationItemText.SalesQuotation,
  key SalesQuotationItemText.SalesQuotationItem,
      @Semantics.language:true
  key SalesQuotationItemText.Language,
  key SalesQuotationItemText.LongTextID,

      @ObjectModel.editableFieldFor: 'LongTextID'
      SalesQuotationItemText.LongTextIDForEdit,
      @Semantics.language:true
      @ObjectModel.editableFieldFor: 'Language'
      SalesQuotationItemText.LanguageForEdit,
      @Semantics.text:true
      SalesQuotationItemText.LongText,

      //    DCL
      @Consumption.hidden: true
      SalesQuotationItemText.SalesQuotationType,
      @Consumption.hidden: true
      SalesQuotationItemText.SalesOrganization,
      @Consumption.hidden: true
      SalesQuotationItemText.DistributionChannel,
      @Consumption.hidden: true
      SalesQuotationItemText.OrganizationDivision,

      //Composition
      _Item           : redirected to parent I_SalesQuotationItemTP,
      _SalesQuotation : redirected to I_SalesQuotationTP
}
```
