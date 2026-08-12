---
name: I_BR_NFADREMICMSREDUCNREASON
description: "This CDS view provides the reason of the ICMS ad rem reduction codes available to be used in the nota fiscal document. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADREMICMSREDUCNREASON')/$value
semantic_en: "This CDS view provides the reason of the ICMS ad rem reduction codes available to be used in the nota fiscal document. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Brazil ICMS Ad Rem Reduction Reason — CDS view giao diện dựa trên dd07l."
keywords:
  - "brazil"
  - "icms"
  - "rem"
  - "reduction"
  - "reason"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - document
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
  - bo:salesorder
---
# I_BR_NFADREMICMSREDUCNREASON

**This CDS view provides the reason of the ICMS ad rem reduction codes available to be used in the nota fiscal document. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADREMICMSREDUCNREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NFAdRemICMSReductionReason` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as j_1bnf_motredadrem preserving type )` | `CHAR(1)` | Reason for ad rem reduction |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFAdRemICMSReducnRsnText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADREMICMSREDUCNREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADREMICMSREDUCNREASON')/$value)*

```abap
@EndUserText.label: 'Brazil ICMS Ad Rem Reduction Reason'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRADREMICMSRED'
@ObjectModel.representativeKey: 'BR_NFAdRemICMSReductionReason'
@ObjectModel.compositionRoot: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
define view I_BR_NFAdRemICMSReducnReason as select from dd07l
  association [0..*] to I_BR_NFAdRemICMSReducnRsnText as _Text on $projection.BR_NFAdRemICMSReductionReason = _Text.BR_NFAdRemICMSReductionReason
{
  @ObjectModel.text.association: '_Text'
  key cast( substring(domvalue_l, 1, 1) as j_1bnf_motredadrem preserving type ) as BR_NFAdRemICMSReductionReason,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname  = 'J_1BNF_MOTREDADREM'
  and as4local = 'A'
```
