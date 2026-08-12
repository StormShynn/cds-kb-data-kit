---
name: I_GRANTTYPE
description: "Grant Type"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTTYPE')/$value
semantic_en: "Grant Type"
semantic_vi: "Grant Type — CDS view giao diện dựa trên gmgrtype."
keywords:
  - "grant"
  - "type"
  - "status"
  - "profile"
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANTTYPE

**Grant Type**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantType` | ✓ | |  | `grant_type` | `CHAR(2)` | Grant Type |
| `StatusProfile` |  | |  | `status_profile` | `CHAR(8)` | Status profile for the user states attached to system states |
| `_GrantTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GrantTypeText` | `I_GrantTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTTYPE')/$value)*

```abap
@EndUserText.label: 'Grant Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'GrantType'
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AbapCatalog.sqlViewName: 'IGMGRANTTYPE'
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'GrantType'
define view I_GrantType 
  as select from gmgrtype
  // if i change the cardinality to [1..1] and add the and with language condition 
  // the view gives weird error so I have commented out the Language condition
  // and changed the cardinality back to [0..*]
    association [0..*] to I_GrantTypeText as _GrantTypeText on $projection.GrantType = _GrantTypeText.GrantType
//                                                            and _GrantTypeText.Language = $session.system_language
{    
  
  @ObjectModel.text.association: '_GrantTypeText'
  key grant_type as GrantType,
  
  status_profile as StatusProfile,

  _GrantTypeText
  
}
```
