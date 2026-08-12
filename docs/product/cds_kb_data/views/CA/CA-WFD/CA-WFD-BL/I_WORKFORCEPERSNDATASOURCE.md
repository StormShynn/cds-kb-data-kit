---
name: I_WORKFORCEPERSNDATASOURCE
description: "Workforce Person Data Source"
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSNDATASOURCE')/$value
semantic_en: "Workforce Person Data Source"
semantic_vi: "Workforce Person Data Source — CDS view giao diện dựa trên Workforce Person Data Source."
keywords:
  - "workforce"
  - "person"
  - "data"
  - "source"
  - "external"
  - "text"
tags:
  - CA
  - bo:salesorder
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
---
# I_WORKFORCEPERSNDATASOURCE

**Workforce Person Data Source**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSNDATASOURCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkforcePersonExternalID` | ✓ | |  |  | `CHAR(100)` | External Person ID |
| `WorkforcePersonDataSource` | ✓ | |  | `WorkAssignmentDataSource` | `CHAR(1)` | Data Source |
| `WorkforcePersonDataSourceText` |  | |  | `cast( case keymap.WorkAssignmentDataSource when 'A' then 'SOAP API' when 'E' then 'Manage Workforce - Employee Import' when 'F' then 'SAP SuccessFactors Employee Central (JB1)' when 'M' then 'SAP Master Data Integration' when 'W' then 'Manage Workforce App' else ' ' end as ddtext )` | `CHAR(60)` | Explanatory Short Text |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSNDATASOURCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSNDATASOURCE')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel.modelingPattern: #NONE
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Workforce Person Data Source'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
define view entity I_WorkforcePersnDataSource as select distinct from I_WorkAssignmentKeyMapping as keymap 
  inner join P_WorkforcePersonInitialAssgmt as InitialAssgmt on keymap.WorkforcePersonExternalID = InitialAssgmt.WorkforcePersonExternalID and 
                                                                keymap.WorkAssignment = InitialAssgmt.WorkAssignment
{
  key keymap.WorkforcePersonExternalID as WorkforcePersonExternalID,
      keymap.WorkAssignmentDataSource  as WorkforcePersonDataSource,
      @EndUserText.label: 'Data Source Text'
      @EndUserText.quickInfo: 'Data Source Text'      
      cast( case keymap.WorkAssignmentDataSource
        when 'A' then 'SOAP API'
        when 'E' then 'Manage Workforce - Employee Import'
        when 'F' then 'SAP SuccessFactors Employee Central (JB1)'
        when 'M' then 'SAP Master Data Integration'
        when 'W' then 'Manage Workforce App'
        else ' '
      end as ddtext ) as WorkforcePersonDataSourceText 
}
where keymap.WorkforcePersonExternalID is not initial and keymap.IsBlocked is initial
```
