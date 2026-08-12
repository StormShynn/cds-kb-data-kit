---
name: I_MAINTEVENTLIKELIHOODTEXT
description: "Likelihood of Maintenance Event - Text"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTLIKELIHOODTEXT')/$value
semantic_en: "Likelihood of Maintenance Event - Text"
semantic_vi: "Likelihood of Maintenance Event - Text — CDS view giao diện dựa trên eam_occren_t."
keywords:
  - "likelihood"
  - "maintenance"
  - "event"
  - "text"
  - "language"
  - "maint"
  - "code"
  - "description"
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_MAINTEVENTLIKELIHOODTEXT

**Likelihood of Maintenance Event - Text**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTLIKELIHOODTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `MaintEventLikelihoodCode` | ✓ | |  | `mainteventoccrencode` | `NUMC(2)` | Likelihood ID |
| `MaintEvtLikelihoodDescription` |  | |  | `mainteventoccrendescription` | `CHAR(70)` | Likelihood Description |
| `_Language` | | ✓ | | | | |
| `_MaintenanceEventLikelihood` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_MaintenanceEventLikelihood` | `I_MaintenanceEventLikelihood` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTLIKELIHOODTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTLIKELIHOODTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Likelihood of Maintenance Event - Text'
@ObjectModel.representativeKey: 'MaintEventLikelihoodCode'

@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A   --Modernization IAMEIME-22799
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMAINTEVTLKLIHDT'

// for data extraction
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Metadata.ignorePropagatedAnnotations: true

define view entity I_MaintEventLikelihoodText
  as select from eam_occren_t

  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
  association [0..1] to I_MaintenanceEventLikelihood as _MaintenanceEventLikelihood on $projection.MaintEventLikelihoodCode = _MaintenanceEventLikelihood.MaintEventLikelihoodCode

{
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key language                    as Language,
      @ObjectModel.foreignKey.association: '_MaintenanceEventLikelihood'  
  key mainteventoccrencode        as MaintEventLikelihoodCode,
      @Semantics.text:true
      mainteventoccrendescription as MaintEvtLikelihoodDescription,

      //Associations
      _Language,
      _MaintenanceEventLikelihood

}
```
