---
name: I_BR_REINFSERVICECODETEXT
description: Brazil EFD REINF Service Code - Text
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_REINFSERVICECODETEXT')/$value
semantic_en: Brazil EFD REINF Service Code - Text
semantic_vi: Brazil EFD REINF Service Code - Text — CDS view giao diện dựa trên logbr_reinft.
keywords:
  - brazil
  - efd
  - reinf
  - service
  - code
  - text
  - language
  - desc
tags:
  - FI
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_REINFSERVICECODETEXT

**Brazil EFD REINF Service Code - Text**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_REINFSERVICECODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_BR_REINFServiceCodeText` | `language` | `LANG(1)` | Language Key |
| `BR_EFDREINFServiceCode` | ✓ | | `_BR_REINFServiceCodeText` | `reinf` | `CHAR(9)` | EFD-REINF Service Type Code |
| `BR_EFDREINFServiceCodeDesc` |  | | `_BR_REINFServiceCodeText` | `description` | `CHAR(255)` | EFD-REINF Service Type Description |
| `_BR_REINFServiceCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_REINFServiceCode` | `I_BR_REINFServiceCode` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_REINFSERVICECODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_REINFSERVICECODETEXT')/$value)*

```abap
@EndUserText.label: 'Brazil EFD REINF Service Code - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics: {dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRREINFCODETXT'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.representativeKey: 'BR_EFDREINFServiceCode' 
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@AbapCatalog.preserveKey:true 

define view I_BR_REINFServiceCodeText as select from logbr_reinft as _BR_REINFServiceCodeText
  association [1..1] to I_BR_REINFServiceCode as _BR_REINFServiceCode on $projection.BR_EFDREINFServiceCode = _BR_REINFServiceCode.BR_EFDREINFServiceCode
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language 
{
  @Semantics.language: true
  key _BR_REINFServiceCodeText.language as Language,
  
  @ObjectModel.foreignKey.association: '_BR_REINFServiceCode'
  key _BR_REINFServiceCodeText.reinf as BR_EFDREINFServiceCode,
  
  @Semantics.text: true
  _BR_REINFServiceCodeText.description as BR_EFDREINFServiceCodeDesc,
  
  _BR_REINFServiceCode,
  _Language
}
```
