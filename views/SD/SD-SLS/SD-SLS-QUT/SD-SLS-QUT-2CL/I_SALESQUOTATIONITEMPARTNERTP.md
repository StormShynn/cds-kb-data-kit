---
name: I_SALESQUOTATIONITEMPARTNERTP
description: "Salesquotationitempartnertp"
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
  - item-level
  - partner
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATIONITEMPARTNERTP

**Salesquotationitempartnertp**

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
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerFunctionForEdit` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
| `PartnerIsSpecificForSDDocItem` |  | |  |  |  |  |
| `SalesQuotationType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_SalesQuotation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Item Partner - TP'

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
   semanticKey: ['SalesQuotation', 'SalesQuotationItem', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesQuotationItemPartnerTP
  as projection on R_SalesQuotationItemPartnerTP as SalesQuotationItemPartner
{
  key SalesQuotationItemPartner.SalesQuotation,
  key SalesQuotationItemPartner.SalesQuotationItem,
  key SalesQuotationItemPartner.PartnerFunction,

      @ObjectModel.editableFieldFor: 'PartnerFunction'
      SalesQuotationItemPartner.PartnerFunctionForEdit,
      SalesQuotationItemPartner.Customer,
      SalesQuotationItemPartner.Supplier,
      SalesQuotationItemPartner.Personnel,
      SalesQuotationItemPartner.ContactPerson,
      SalesQuotationItemPartner.ReferenceBusinessPartner,
      SalesQuotationItemPartner.Partner,
      SalesQuotationItemPartner.PartnerIsSpecificForSDDocItem,

      //    DCL
      @Consumption.hidden: true
      SalesQuotationItemPartner.SalesQuotationType,
      @Consumption.hidden: true
      SalesQuotationItemPartner.SalesOrganization,
      @Consumption.hidden: true
      SalesQuotationItemPartner.DistributionChannel,
      @Consumption.hidden: true
      SalesQuotationItemPartner.OrganizationDivision,

      //Composition
      _Item           : redirected to parent I_SalesQuotationItemTP,
      _SalesQuotation : redirected to I_SalesQuotationTP
}
```
