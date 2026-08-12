---
name: I_AT_BPOENBIDNTNRASSGMTSTATUS
description: "Ident Number Assignment Status"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AT_BPOENBIDNTNRASSGMTSTATUS')/$value
semantic_en: "Ident Number Assignment Status"
semantic_vi: "Ident Number Assignment Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "ident"
  - "number"
  - "assignment"
  - "status"
  - "assigned"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
---
# I_AT_BPOENBIDNTNRASSGMTSTATUS

**Ident Number Assignment Status**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AT_BPOENBIDNTNRASSGMTSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPOeNBIdentNumberAssigned` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AT_BPOeNBIdntNrAssgmtStsText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AT_BPOENBIDNTNRASSGMTSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AT_BPOENBIDNTNRASSGMTSTATUS')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Ident Number Assignment Status'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                representativeKey: 'BPOeNBIdentNumberAssigned',
                sapObjectNodeType.name: 'AT_BPOeNBIdentNmbrAssgmtStatus',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ],
                modelingPattern: #ANALYTICAL_DIMENSION  
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL 
            }                       
@VDM.viewType: #BASIC
@Search.searchable: true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_AT_BPOeNBIdntNrAssgmtStatus as select from dd07l
association [0..*] to I_AT_BPOeNBIdntNrAssgmtStsText as _Text on $projection.BPOeNBIdentNumberAssigned = _Text.BPOeNBIdentNumberAssigned
{
  
 @Search.defaultSearchElement: true
 @Search.ranking: #HIGH
 @ObjectModel.text.association: '_Text'
  key  dd07l.domvalue_l as BPOeNBIdentNumberAssigned,
  _Text
  
}

where
      dd07l.domname  = 'BP_JANEI'
  and dd07l.as4local = 'A'
```
