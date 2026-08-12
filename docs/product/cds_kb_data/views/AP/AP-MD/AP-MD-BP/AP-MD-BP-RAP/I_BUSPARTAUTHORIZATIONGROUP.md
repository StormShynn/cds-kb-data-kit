---
name: I_BUSPARTAUTHORIZATIONGROUP
description: "This CDS view provides an interface for accessing business partner authorization groups. The associated text view delivers text descriptions for business partner authorization groups in multiple languages. It also helps you retrieve the language-dependent names for authorization objects and their groups. This CDS view and the associated text view provide the data to answer the following business questions: Which authorization groups are available for controlling access to business partner data in the system? Which authorization groups exist for a particular authorization object? What is the description of a specific business partner authorization group in a given language? What languages are available for the descriptions of business partner authorization groups?"
app_component: AP-MD-BP-RAP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTAUTHORIZATIONGROUP')/$value
semantic_en: "This CDS view provides an interface for accessing business partner authorization groups. The associated text view delivers text descriptions for business partner authorization groups in multiple languages. It also helps you retrieve the language-dependent names for authorization objects and their groups. This CDS view and the associated text view provide the data to answer the following business questions: Which authorization groups are available for controlling access to business partner data in the system? Which authorization groups exist for a particular authorization object? What is the description of a specific business partner authorization group in a given language? What languages are available for the descriptions of business partner authorization groups?"
semantic_vi: "Business Partner Authorization Group — CDS view giao diện dựa trên tb037."
keywords:
  - "business"
  - "partner"
  - "authorization"
  - "group"
  - "object"
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - AP-MD-BP-RAP
  - bo:companycode
  - component:AP-MD-BP-RAP
  - interface-view
---
# I_BUSPARTAUTHORIZATIONGROUP

**This CDS view provides an interface for accessing business partner authorization groups. The associated text view delivers text descriptions for business partner authorization groups in multiple languages. It also helps you retrieve the language-dependent names for authorization objects and their groups. This CDS view and the associated text view provide the data to answer the following business questions: Which authorization groups are available for controlling access to business partner data in the system? Which authorization groups exist for a particular authorization object? What is the description of a specific business partner authorization group in a given language? What languages are available for the descriptions of business partner authorization groups?**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTAUTHORIZATIONGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AuthorizationGroup` | ✓ | |  | `augrp` | `CHAR(4)` | Authorization Group |
| `AuthorizationObject` | ✓ | |  | `auobj` | `CHAR(10)` | Authorization Group Object |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartAuthorizationGroupTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTAUTHORIZATIONGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTAUTHORIZATIONGROUP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBPAUTHGRP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@EndUserText.label: 'Business Partner Authorization Group'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'AuthorizationGroup'
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'BPAuthorizationGroup'
define view I_BusPartAuthorizationGroup
  as select from tb037
  association [0..*] to I_BusPartAuthorizationGroupTxt as _Text        on  $projection.AuthorizationGroup  = _Text.AuthorizationGroup
                                                                       and $projection.AuthorizationObject = _Text.AuthorizationObject
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key augrp as AuthorizationGroup,
      @Search : { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #MEDIUM }
  key auobj as AuthorizationObject,
      _Text
}
where
  auobj = 'BUPA'
```
