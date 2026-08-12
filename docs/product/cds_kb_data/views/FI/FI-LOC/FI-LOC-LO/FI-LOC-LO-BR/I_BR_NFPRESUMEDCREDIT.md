---
name: I_BR_NFPRESUMEDCREDIT
description: "This CDS view displays the presumed credit for nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPRESUMEDCREDIT')/$value
semantic_en: "This CDS view displays the presumed credit for nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Brazil Nota Fiscal Presumed Credit — CDS view giao diện dựa trên j_1bnfprsmd_crdt."
keywords:
  - "brazil"
  - "nota"
  - "fiscal"
  - "presumed"
  - "credit"
  - "item"
  - "prsmd"
  - "sequence"
  - "number"
  - "fscl"
  - "bnft"
  - "code"
  - "percent"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_NFPRESUMEDCREDIT

**This CDS view displays the presumed credit for nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPRESUMEDCREDIT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` | `NUMC(10)` | Document Number |
| `BR_NotaFiscalItem` | ✓ | |  | `itmnum` | `NUMC(6)` | Document Item Number |
| `BR_NFPrsmdCreditSequenceNumber` | ✓ | |  | `counter` | `NUMC(4)` | Counter |
| `BR_FsclBnftCodePresumedCredit` |  | |  | `cast(c_cred_presumido as logbr_presumedcreditcbenef preserving type)` | `CHAR(10)` | State Fiscal Benefit Code of Presumed Credit |
| `BR_PresumedCreditPercent` |  | |  | `cast(p_cred_presumido as logbr_presumedcreditpercentage preserving type)` | `DEC(7)` | Presumed Credit Percentage |
| `BR_PresumedCreditAmount` |  | |  | `cast(v_cred_presumido as logbr_presumedcreditamount preserving type)` | `CURR(15)` | Presumed Credit Amount |
| `SalesDocumentCurrency` |  | | `_BR_NFDocumentCurrency` | `SalesDocumentCurrency` | `CUKY(5)` | SD Document Currency |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFDocumentCurrency` | `I_BR_NFDocumentCurrency` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPRESUMEDCREDIT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPRESUMEDCREDIT')/$value)*

```abap
@EndUserText.label: 'Brazil Nota Fiscal Presumed Credit'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #NOT_REQUIRED
define view entity I_BR_NFPresumedCredit as 
  select from j_1bnfprsmd_crdt
  association [1..1] to I_BR_NFDocumentCurrency as _BR_NFDocumentCurrency on $projection.BR_NotaFiscal = _BR_NFDocumentCurrency.BR_NotaFiscal 
{
    key docnum as BR_NotaFiscal,
    key itmnum as BR_NotaFiscalItem,
    key counter as BR_NFPrsmdCreditSequenceNumber,
    cast(c_cred_presumido as logbr_presumedcreditcbenef preserving type) as BR_FsclBnftCodePresumedCredit,
    cast(p_cred_presumido as logbr_presumedcreditpercentage preserving type) as BR_PresumedCreditPercent,
    @Semantics.amount.currencyCode:'SalesDocumentCurrency'
    cast(v_cred_presumido as logbr_presumedcreditamount preserving type) as BR_PresumedCreditAmount,
    
    _BR_NFDocumentCurrency.SalesDocumentCurrency as SalesDocumentCurrency
}
```
