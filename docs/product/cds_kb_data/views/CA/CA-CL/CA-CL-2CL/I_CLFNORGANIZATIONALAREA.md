---
name: I_CLFNORGANIZATIONALAREA
description: "Organizational Area of Clfn Class Type"
app_component: CA-CL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CLFNORGANIZATIONALAREA')/$value
semantic_en: "Organizational Area of Clfn Class Type"
semantic_vi: "Organizational Area of Clfn Class Type — CDS view giao diện dựa trên tcls."
keywords:
  - "organizational"
  - "area"
  - "clfn"
  - "class"
  - "type"
  - "code"
tags:
  - CA
  - CA-CL
  - CA-CL-2CL
  - component:CA-CL-2CL
  - interface-view
  - lob:cross_application components
---
# I_CLFNORGANIZATIONALAREA

**Organizational Area of Clfn Class Type**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CLFNORGANIZATIONALAREA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassType` | ✓ | |  | `klart` | `CHAR(3)` | Class Type |
| `ClfnOrganizationalAreaCode` | ✓ | |  | `cast ( OrganizationalArea.sicht as clfnorganizationalareacode preserving type )` | `CHAR(1)` | Organizational Area Code |
| `_ClassType` | | ✓ | | | | |
| `_OrganizationalAreaText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ClassType` | `I_ClfnClassTypeBasic` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CLFNORGANIZATIONALAREA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CLFNORGANIZATIONALAREA')/$value)*

```abap
@AbapCatalog.sqlViewName: 'INGCCLC5'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Organizational Area of Clfn Class Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'ClfnOrganizationalAreaCode'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_ClfnOrganizationalArea 
  as select from tcls as OrganizationalArea
  
      composition [0..*] of I_ClfnOrganizationalAreaText as _OrganizationalAreaText
      association [0..1] to I_ClfnClassTypeBasic as _ClassType  
        on $projection.ClassType = _ClassType.ClassType  
{      
      @ObjectModel.foreignKey.association: '_ClassType'
  key OrganizationalArea.klart as ClassType,
      @ObjectModel.text.association: '_OrganizationalAreaText'  
  key cast ( OrganizationalArea.sicht as clfnorganizationalareacode preserving type ) as ClfnOrganizationalAreaCode,
      
      _ClassType,
      _OrganizationalAreaText
}
```
