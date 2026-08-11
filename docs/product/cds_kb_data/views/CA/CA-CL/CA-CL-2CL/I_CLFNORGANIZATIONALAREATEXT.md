---
name: I_CLFNORGANIZATIONALAREATEXT
description: "Orgl Area of Clfn Class Type - Text"
app_component: CA-CL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CLFNORGANIZATIONALAREATEXT')/$value
semantic_en: "Orgl Area of Clfn Class Type - Text"
semantic_vi: "Orgl Area of Clfn Class Type - Text — CDS view giao diện dựa trên tclst."
keywords:
  - "orgl"
  - "area"
  - "clfn"
  - "class"
  - "type"
  - "text"
  - "organizational"
  - "code"
  - "language"
  - "name"
tags:
  - CA
  - CA-CL
  - CA-CL-2CL
  - component:CA-CL-2CL
  - interface-view
  - lob:cross_application components
---
# I_CLFNORGANIZATIONALAREATEXT

**Orgl Area of Clfn Class Type - Text**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CLFNORGANIZATIONALAREATEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassType` | ✓ | |  | `klart` | `CHAR(3)` | Class Type |
| `ClfnOrganizationalAreaCode` | ✓ | |  | `cast ( OrganizationalAreaText.sicht as clfnorganizationalareacode preserving type )` | `CHAR(1)` | Organizational Area Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ClfnOrganizationalAreaName` |  | |  | `stext` | `CHAR(40)` | Organizational Area Description |
| `_Language` | | ✓ | | | | |
| `_ClassType` | | ✓ | | | | |
| `_ClfnOrganizationalArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ClassType` | `I_ClfnClassTypeBasic` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CLFNORGANIZATIONALAREATEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CLFNORGANIZATIONALAREATEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'INGCCLC6'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Orgl Area of Clfn Class Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ClfnOrganizationalAreaCode'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ] 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ClfnOrganizationalAreaText 
  as select from tclst as OrganizationalAreaText
  
      association to parent I_ClfnOrganizationalArea as _ClfnOrganizationalArea
        on $projection.ClassType                    = _ClfnOrganizationalArea.ClassType and
           $projection.ClfnOrganizationalAreaCode   = _ClfnOrganizationalArea.ClfnOrganizationalAreaCode
      association [0..1] to I_Language as _Language  
        on $projection.Language = _Language.Language
      association [0..1] to I_ClfnClassTypeBasic as _ClassType  
        on $projection.ClassType = _ClassType.ClassType      
{ 
      @ObjectModel.foreignKey.association: '_ClassType'
  key OrganizationalAreaText.klart       as ClassType,  
      @ObjectModel.foreignKey.association: '_ClfnOrganizationalArea'
      @ObjectModel.text.element: ['ClfnOrganizationalAreaName']
  key cast ( OrganizationalAreaText.sicht as clfnorganizationalareacode preserving type ) as ClfnOrganizationalAreaCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key OrganizationalAreaText.spras       as Language,
      @Semantics.text: true 
      OrganizationalAreaText.stext       as ClfnOrganizationalAreaName,
      
      _ClfnOrganizationalArea,
      _ClassType,
      _Language
}
```
