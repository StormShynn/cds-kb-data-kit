---
name: I_MAINTPACKAGETEXTDATA
description: "This CDS view provides the prerequisites for answering the following business questions: What is the description of the maintenance package in all languages? What is the description of the maintenance package hierarchy in all languages? What is the description of the maintenance package cycle in all languages? What is the description of the start offset for maintenance package in all languages?"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTPACKAGETEXTDATA')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the description of the maintenance package in all languages? What is the description of the maintenance package hierarchy in all languages? What is the description of the maintenance package cycle in all languages? What is the description of the start offset for maintenance package in all languages?"
semantic_vi: "Maintenance Package - Text — CDS view giao diện dựa trên I_MaintenancePackageText."
keywords:
  - "maintenance"
  - "package"
  - "text"
  - "language"
  - "strategy"
  - "maint"
  - "hierarchy"
  - "short"
tags:
  - PM
  - bo:plant
  - component:PM-PRM-MP-2CL
  - interface-view
  - lob:plant maintenance
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
---
# I_MAINTPACKAGETEXTDATA

**This CDS view provides the prerequisites for answering the following business questions: What is the description of the maintenance package in all languages? What is the description of the maintenance package hierarchy in all languages? What is the description of the maintenance package cycle in all languages? What is the description of the start offset for maintenance package in all languages?**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTPACKAGETEXTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `MaintenanceStrategy` | ✓ | |  |  | `CHAR(6)` | Maintenance Strategy |
| `MaintenancePackage` | ✓ | |  |  | `NUMC(2)` | Maintenance Package Number |
| `MaintenancePackageText` |  | |  |  | `CHAR(30)` | Text for maintenance package/cycle (time/performance) |
| `MaintPackageHierarchyShortText` |  | |  |  | `CHAR(2)` | Short text of the maintenance package hierarchy |
| `MaintenanceCycleShortText` |  | |  |  | `CHAR(2)` | Short text for the maintenance cycle (time/performance) |
| `StartOffsetShortText` |  | |  |  | `CHAR(2)` | Short text for the start offset (time/performance) |
| `_MaintenanceStrategy` | | ✓ | | | | |
| `_MaintenancePackage` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenanceStrategy` | `I_MaintenanceStrategyData` | [0..1] |
| `_MaintenancePackage` | `I_MaintenancePackageData` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTPACKAGETEXTDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTPACKAGETEXTDATA')/$value)*

```abap
@EndUserText.label: 'Maintenance Package - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'IMNTPCKGTXTDATA'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'MaintenancePackage'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Metadata.ignorePropagatedAnnotations: true

@Analytics: {
  dataExtraction: {
    enabled: true
  }
}

@ObjectModel.modelingPattern:   #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:     [ #EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ]

define view I_MaintPackageTextData 
    as select from I_MaintenancePackageText 

    association [0..1] to I_MaintenanceStrategyData as _MaintenanceStrategy     on  _MaintenanceStrategy.MaintenanceStrategy = $projection.MaintenanceStrategy
  
    association [0..1] to I_MaintenancePackageData  as _MaintenancePackage      on  _MaintenancePackage.MaintenanceStrategy = $projection.MaintenanceStrategy
                                                                                and _MaintenancePackage.MaintenancePackage  = $projection.MaintenancePackage
  
    association [0..1] to I_Language                as _Language                on  _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,

      @ObjectModel.foreignKey.association: '_MaintenanceStrategy'
  key MaintenanceStrategy,

      @ObjectModel.foreignKey.association: '_MaintenancePackage'
  key MaintenancePackage,

      @Semantics.text: true
      MaintenancePackageText,
      
      @Semantics.text: true
      MaintPackageHierarchyShortText,

      @Semantics.text: true
      MaintenanceCycleShortText,
      
      @Semantics.text: true
      StartOffsetShortText,

      /* Associations - locally defined */
      _Language,
      _MaintenancePackage,
      _MaintenanceStrategy
}
```
