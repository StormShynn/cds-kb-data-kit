---
name: I_BUSINESSPARTNERROLETEXT
description: "Business Partner Role- Text"
app_component: AP-MD-BP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERROLETEXT')/$value
semantic_en: "Business Partner Role- Text"
semantic_vi: "Business Partner Role- Text — CDS view giao diện dựa trên tb003t."
keywords:
  - "business"
  - "partner"
  - "role"
  - "text"
  - "client"
  - "language"
  - "short"
  - "name"
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - component:AP-MD-BP
  - interface-view
---
# I_BUSINESSPARTNERROLETEXT

**Business Partner Role- Text**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERROLETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Client` | ✓ | |  | `client` |  |  |
| `BusinessPartnerRole` | ✓ | |  | `role` | `CHAR(6)` | BP Role |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BusinessPartnerRoleShortName` |  | |  | `rltitl` | `CHAR(25)` | BP Role Title |
| `_Language` | | ✓ | | | | |
| `_BusinessPartnerRole` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_BusinessPartnerRole` | `I_BusinessPartnerRole` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERROLETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERROLETEXT')/$value)*

```abap
@EndUserText.label: 'Business Partner Role- Text' //'Business Partner Role Text' //same as DDL description
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BusinessPartnerRole'
@AbapCatalog.sqlViewName: 'IBPROLETXT'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE , #ANALYTICAL_DIMENSION ]
@ClientHandling.algorithm : #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_BusinessPartnerRoleText //must start with 'I_' and end with 'Text' or 'T'
  as select from tb003t
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
  association [1..1] to I_BusinessPartnerRole as _BusinessPartnerRole on $projection.BusinessPartnerRole = _BusinessPartnerRole.BusinessPartnerRole
{
  key client as Client,
  key role   as BusinessPartnerRole,
      @Semantics.language: true
  key spras  as Language, //text views shall always be language dependent
      @Semantics.text: true
      @EndUserText.label: 'Role Description'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      rltitl as BusinessPartnerRoleShortName,
      _BusinessPartnerRole, //decomment only if no problems in analytics
      _Language

}
```
