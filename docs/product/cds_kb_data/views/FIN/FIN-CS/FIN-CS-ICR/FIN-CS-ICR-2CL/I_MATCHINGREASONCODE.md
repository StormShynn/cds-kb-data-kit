---
name: I_MATCHINGREASONCODE
description: "Matching Reason Code"
app_component: FIN-CS-ICR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATCHINGREASONCODE')/$value
semantic_en: "Matching Reason Code"
semantic_vi: "Matching Reason Code — CDS view giao diện dựa trên ica_rc."
keywords:
  - "matching"
  - "reason"
  - "code"
tags:
  - FIN
  - bo:salesorder
  - component:FIN-CS-ICR-2CL
  - FIN-CS
  - FIN-CS-ICR
  - FIN-CS-ICR-2CL
  - interface-view
  - lob:finance
---
# I_MATCHINGREASONCODE

**Matching Reason Code**

| Property | Value |
|---|---|
| App Component | `FIN-CS-ICR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATCHINGREASONCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MatchingReasonCode` | ✓ | |  | `rcode` | `CHAR(6)` | Reason Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MatchingReasonCodeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATCHINGREASONCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATCHINGREASONCODE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IICAREASONCODE'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Matching Reason Code'

@ObjectModel.representativeKey: 'MatchingReasonCode'

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A

@VDM.viewType: #BASIC

// Required by C1 Contract
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET]


define view I_MatchingReasonCode as select from ica_rc 
  association[0..*]    to I_MatchingReasonCodeText             as _Text on $projection.MatchingReasonCode          = _Text.MatchingReasonCode
{

  @ObjectModel.text.association: '_Text'
  key rcode as MatchingReasonCode,
  
  _Text
}
```
