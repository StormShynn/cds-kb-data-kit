---
name: I_SALESQUOTATIONPARTNERTP
description: Salesquotationpartnertp
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
  - partner
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATIONPARTNERTP

**Salesquotationpartnertp**

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
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerFunctionForEdit` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
| `SalesQuotationType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_SalesQuotation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Partner - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory:   #L
    },
    semanticKey:           ['SalesQuotation', 'PartnerFunction'],
    modelingPattern:       #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SalesQuotationPartnerTP
  as projection on R_SalesQuotationPartnerTP as SalesQuotationPartner
{
  key SalesQuotationPartner.SalesQuotation,
  key SalesQuotationPartner.PartnerFunction,
      @ObjectModel.editableFieldFor: 'PartnerFunction'
      SalesQuotationPartner.PartnerFunctionForEdit,

      SalesQuotationPartner.Customer,
      SalesQuotationPartner.Supplier,
      SalesQuotationPartner.Personnel,
      SalesQuotationPartner.ContactPerson,
      SalesQuotationPartner.ReferenceBusinessPartner,
      SalesQuotationPartner.Partner,

      //    DCL
      @Consumption.hidden: true
      SalesQuotationPartner.SalesQuotationType,
      @Consumption.hidden: true
      SalesQuotationPartner.SalesOrganization,
      @Consumption.hidden: true
      SalesQuotationPartner.DistributionChannel,
      @Consumption.hidden: true
      SalesQuotationPartner.OrganizationDivision,

      //Composition
      _SalesQuotation : redirected to parent I_SalesQuotationTP
}
```
