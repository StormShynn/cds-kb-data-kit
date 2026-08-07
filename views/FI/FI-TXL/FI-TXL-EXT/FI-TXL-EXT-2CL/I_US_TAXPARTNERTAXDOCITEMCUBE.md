---
name: I_US_TAXPARTNERTAXDOCITEMCUBE
description: This CDS view provides a single-source view for all external tax documents. This view shows the components of these tax documents, such as the original documents, line items, and the tax amounts at various jurisdiction levels, such as state, county, and city. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-TXL-EXT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_US_TAXPARTNERTAXDOCITEMCUBE')/$value
semantic_en: This CDS view provides a single-source view for all external tax documents. This view shows the components of these tax documents, such as the original documents, line items, and the tax amounts at various jurisdiction levels, such as state, county, and city. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - bo:companycode
  - component:FI-TXL-EXT-2CL
  - document
  - FI-TXL
  - FI-TXL-EXT
  - FI-TXL-EXT-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_US_TAXPARTNERTAXDOCITEMCUBE

**This CDS view provides a single-source view for all external tax documents. This view shows the components of these tax documents, such as the original documents, line items, and the tax amounts at various jurisdiction levels, such as state, county, and city. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-TXL-EXT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_US_TAXPARTNERTAXDOCITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `US_TaxPartnerTaxDocument` |  | |  |  | `CHAR(12)` | External-tax document number |
| `US_TaxPartnerTaxDocumentItem` |  | |  |  | `NUMC(6)` | External-tax document item number |
| `TaxJurisdictionLevel` |  | |  |  | `CHAR(1)` | Tax jurisdiction code level |
| `US_TaxState` |  | |  |  | `CHAR(2)` | External Tax State |
| `UnitedStatesTaxSourcing` |  | |  |  | `CHAR(1)` | Tax Sourcing |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `TaxJurisdictionText` |  | |  |  | `CHAR(200)` | Tax Jurisdiction Code Description |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `TaxCalculationProcedure` |  | |  |  | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `SDDocument` |  | |  |  | `CHAR(10)` | Sales and Distribution Document Number |
| `UnitedStatesTaxCategory` |  | |  |  | `CHAR(1)` | Tax Category for US Taxes |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `TaxBaseAmountInTransCrcy` |  | |  |  | `CURR(23)` | Tax Base Amount in Transaction Currency |
| `TaxAmountInTransCrcy` |  | |  |  | `CURR(23)` | Tax Amount in Transaction Currency |
| `TaxExemptionAmount` |  | |  |  | `CURR(23)` | Tax-Exempt Revaluation Amount |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `TaxBaseAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Tax Base Amount in Company Code Currency |
| `TaxAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Signed Tax Amount in Company Code Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `US_TaxPartnerReceivedTaxDate` |  | |  |  | `DATS(8)` | Tax Date as Sent to Partner |
| `TaxCalculationDate` |  | |  |  | `DATS(8)` | The date used for external tax calculation |
| `US_TaxFreeDefinedValue1` |  | |  |  | `CHAR(100)` | Extension Field 001 |
| `US_TaxFreeDefinedValue2` |  | |  |  | `CHAR(100)` | Extension Field 002 |
| `US_TaxFreeDefinedValue3` |  | |  |  | `CHAR(100)` | Extension Field 003 |
| `US_TaxFreeDefinedValue4` |  | |  |  | `CHAR(100)` | Extension Field 004 |
| `US_TaxFreeDefinedValue5` |  | |  |  | `CHAR(100)` | Extension Field 005 |
| `US_TaxFreeDefinedValue6` |  | |  |  | `CHAR(100)` | Extension Field 006 |
| `US_TaxFreeDefinedValue7` |  | |  |  | `CHAR(100)` | Extension Field 007 |
| `US_TaxFreeDefinedValue8` |  | |  |  | `CHAR(100)` | Extension Field 008 |
| `US_TaxFreeDefinedValue9` |  | |  |  | `CHAR(100)` | Extension Field 009 |
| `US_TaxFreeDefinedValue10` |  | |  |  | `CHAR(100)` | Extension Field 010 |
| `US_TaxFreeDefinedValue11` |  | |  |  | `CHAR(100)` | Extension Field 011 |
| `US_TaxFreeDefinedValue12` |  | |  |  | `CHAR(100)` | Extension Field 012 |
| `US_TaxFreeDefinedValue13` |  | |  |  | `CHAR(100)` | Extension Field 013 |
| `US_TaxFreeDefinedValue14` |  | |  |  | `CHAR(100)` | Extension Field 014 |
| `US_TaxFreeDefinedValue15` |  | |  |  | `CHAR(100)` | Extension Field 015 |
| `US_TaxFreeDefinedValue16` |  | |  |  | `CHAR(100)` | Extension Field 016 |
| `US_TaxFreeDefinedValue17` |  | |  |  | `CHAR(100)` | Extension Field 017 |
| `US_TaxFreeDefinedValue18` |  | |  |  | `CHAR(100)` | Extension Field 018 |
| `US_TaxFreeDefinedValue19` |  | |  |  | `CHAR(100)` | Extension Field 019 |
| `US_TaxFreeDefinedValue20` |  | |  |  | `CHAR(100)` | Extension Field 020 |
| `US_TaxFreeDefinedValue21` |  | |  |  | `CHAR(100)` | Extension Field 021 |
| `US_TaxFreeDefinedValue22` |  | |  |  | `CHAR(100)` | Extension Field 022 |
| `US_TaxFreeDefinedValue23` |  | |  |  | `CHAR(100)` | Extension Field 023 |
| `US_TaxFreeDefinedValue24` |  | |  |  | `CHAR(100)` | Extension Field 024 |
| `US_TaxFreeDefinedValue25` |  | |  |  | `CHAR(100)` | Extension Field 025 |
| `US_TaxFreeDefinedValue26` |  | |  |  | `CHAR(100)` | Extension Field 026 |
| `US_TaxFreeDefinedValue27` |  | |  |  | `CHAR(100)` | Extension Field 027 |
| `US_TaxFreeDefinedValue28` |  | |  |  | `CHAR(100)` | Extension Field 028 |
| `US_TaxFreeDefinedValue29` |  | |  |  | `CHAR(100)` | Extension Field 029 |
| `US_TaxFreeDefinedValue30` |  | |  |  | `CHAR(100)` | Extension Field 030 |
| `US_TaxFreeDefinedValue31` |  | |  |  | `CHAR(100)` | Extension Field 031 |
| `US_TaxFreeDefinedValue32` |  | |  |  | `CHAR(100)` | Extension Field 032 |
| `US_TaxFreeDefinedValue33` |  | |  |  | `CHAR(100)` | Extension Field 033 |
| `US_TaxFreeDefinedValue34` |  | |  |  | `CHAR(100)` | Extension Field 034 |
| `US_TaxFreeDefinedValue35` |  | |  |  | `CHAR(100)` | Extension Field 035 |
| `US_TaxFreeDefinedValue36` |  | |  |  | `CHAR(100)` | Extension Field 036 |
| `US_TaxFreeDefinedValue37` |  | |  |  | `CHAR(100)` | Extension Field 037 |
| `US_TaxFreeDefinedValue38` |  | |  |  | `CHAR(100)` | Extension Field 038 |
| `US_TaxFreeDefinedValue39` |  | |  |  | `CHAR(100)` | Extension Field 039 |
| `US_TaxFreeDefinedValue40` |  | |  |  | `CHAR(100)` | Extension Field 040 |
| `US_TaxFreeDefinedValue41` |  | |  |  | `CHAR(100)` | Extension Field 041 |
| `US_TaxFreeDefinedValue42` |  | |  |  | `CHAR(100)` | Extension Field 042 |
| `US_TaxFreeDefinedValue43` |  | |  |  | `CHAR(100)` | Extension Field 043 |
| `US_TaxFreeDefinedValue44` |  | |  |  | `CHAR(100)` | Extension Field 044 |
| `US_TaxFreeDefinedValue45` |  | |  |  | `CHAR(100)` | Extension Field 045 |
| `US_TaxFreeDefinedValue46` |  | |  |  | `CHAR(100)` | Extension Field 046 |
| `US_TaxFreeDefinedValue47` |  | |  |  | `CHAR(100)` | Extension Field 047 |
| `US_TaxFreeDefinedValue48` |  | |  |  | `CHAR(100)` | Extension Field 048 |
| `US_TaxFreeDefinedValue49` |  | |  |  | `CHAR(100)` | Extension Field 049 |
| `US_TaxFreeDefinedValue50` |  | |  |  | `CHAR(100)` | Extension Field 050 |
