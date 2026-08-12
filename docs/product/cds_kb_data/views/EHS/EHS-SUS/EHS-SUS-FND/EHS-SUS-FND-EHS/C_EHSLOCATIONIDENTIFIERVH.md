---
name: C_EHSLOCATIONIDENTIFIERVH
description: "This CDS view provides value help for EHS Location IDs. You can use this view to search for and select valid EHS location identifiers when entering or filtering data in applications that require location information. The view delivers a searchable and user-friendly list of active EHS locations with their current attributes. It filters by the current system date to show only valid location revisions. The view supports authorization checks and provides text descriptions for location types and statuses in the user's language. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONIDENTIFIERVH')/$value
semantic_en: "This CDS view provides value help for EHS Location IDs. You can use this view to search for and select valid EHS location identifiers when entering or filtering data in applications that require location information. The view delivers a searchable and user-friendly list of active EHS locations with their current attributes. It filters by the current system date to show only valid location revisions. The view supports authorization checks and provides text descriptions for location types and statuses in the user's language. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location — CDS view tiêu dùng dựa trên EHS Location."
keywords:
  - "ehs"
  - "location"
  - "name"
  - "authorization"
  - "group"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
---
# C_EHSLOCATIONIDENTIFIERVH

**This CDS view provides value help for EHS Location IDs. You can use this view to search for and select valid EHS location identifiers when entering or filtering data in applications that require location information. The view delivers a searchable and user-friendly list of active EHS locations with their current attributes. It filters by the current system date to show only valid location revisions. The view supports authorization checks and provides text descriptions for location types and statuses in the user's language. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONIDENTIFIERVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` | ✓ | |  |  | `RAW(16)` | Location |
| `EHSLocationID` | ✓ | |  | `cast( EHSLocationID as ehfnd_loc_id_short_label preserving type )` | `CHAR(20)` | id |
| `EHSLocationName` |  | |  | `cast( _LocTextDesc.EHSLocationName as ehfnd_loc_name preserving type )` | `CHAR(60)` | Location |
| `EHSLocationAuthorizationGroup` |  | |  | `cast(_EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type )` | `CHAR(21)` | Location Authorization Group |
| `_EHSLocationStatusText` | | ✓ | | | | |
| `_EHSLocationTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LocTextDesc` | `I_LocationDescFallbackLang` | [1..1] |
| `_EHSLocationStatusText` | `I_EHSLocationStatusText` | [0..*] |
| `_EHSLocationTypeText` | `I_EHSLocationTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONIDENTIFIERVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONIDENTIFIERVH')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'EHS Location'

@VDM.viewType: #CONSUMPTION

@ObjectModel: { representativeKey: 'EHSLocationID',
                dataCategory: #VALUE_HELP,
                usageType: { serviceQuality: #C,
                             sizeCategory:   #M,
                             dataClass:      #MASTER }
              }

@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

define view entity C_EHSLocationIdentifierVH
  as select distinct from I_EHSLocationRoot
  association [1..1] to I_LocationDescFallbackLang as _LocTextDesc           on $projection.EHSLocationUUID = _LocTextDesc.EHSLocationUUID
  association [0..*] to I_EHSLocationStatusText    as _EHSLocationStatusText on $projection.ehslocationstatus = _EHSLocationStatusText.EHSLocationStatus
  association [0..*] to I_EHSLocationTypeText      as _EHSLocationTypeText   on $projection.ehslocationtype = _EHSLocationTypeText.EHSLocationType
{

      @UI.hidden: true
      @ObjectModel.text.element: ['EHSLocationName'] // Suggested Values work with visible fields (EHSLocationName is hidden by default )
  key EHSLocationUUID,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #HIGH
      @Semantics.text: true
      @ObjectModel.text.element: ['EHSLocationName']
  key cast( EHSLocationID as ehfnd_loc_id_short_label preserving type )      as EHSLocationID,

      @UI.hidden: true
      @Semantics.text: true
      @Consumption.filter.hidden: true
      cast( _LocTextDesc.EHSLocationName as ehfnd_loc_name preserving type ) as EHSLocationName,

      @UI.textArrangement: #TEXT_ONLY
      // Please, do not change the association below - there are dependencies in some front-end apps.
      @ObjectModel.text.association: '_EHSLocationTypeText'
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationType,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      @UI.hidden: true
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._EHSLocationType._Text[1: Language = $session.system_language].EHSLocationTypeText,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._EHSLocationType,
      _EHSLocationTypeText,

      @UI.textArrangement: #TEXT_ONLY
      @ObjectModel.text.association: '_EHSLocationStatusText'
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationStatus,

      cast(_EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type ) as EHSLocationAuthorizationGroup,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].CompanyCode,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].CostCenter,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].BusinessArea,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].Plant,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      @UI.hidden: true
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._EHSLocationStatus._Text[1: Language = $session.system_language].EHSLocationStatusText,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._EHSLocationStatus,
      _EHSLocationStatusText

}
```
