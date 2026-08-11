---
name: I_ORGANIZATIONALUNITTEXT
description: "This view provides the prerequisites for answering the following business questions: What is the short and long name of Organizational Unit?"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORGANIZATIONALUNITTEXT')/$value
semantic_en: "This view provides the prerequisites for answering the following business questions: What is the short and long name of Organizational Unit?"
semantic_vi: "Table for Organizational Units with Text — CDS view giao diện dựa trên Table for Organizational Units with Text."
keywords:
  - "table"
  - "for"
  - "organizational"
  - "units"
  - "with"
  - "text"
  - "unit"
  - "language"
  - "start"
  - "date"
  - "short"
  - "name"
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
---
# I_ORGANIZATIONALUNITTEXT

**This view provides the prerequisites for answering the following business questions: What is the short and long name of Organizational Unit?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORGANIZATIONALUNITTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrganizationalUnit` | ✓ | |  | `objid` | `NUMC(8)` | Object ID |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `StartDate` | ✓ | |  | `begda` | `DATS(8)` | Start Date |
| `EndDate` | ✓ | |  | `endda` | `DATS(8)` | End Date |
| `OrganizationalUnitShortName` |  | |  | `short` | `CHAR(12)` | Object Abbreviation |
| `OrganizationalUnitName` |  | |  | `stext` | `CHAR(40)` | Object Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORGANIZATIONALUNITTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORGANIZATIONALUNITTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IORGUNITTXT'
@VDM.viewType:  #BASIC
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Table for Organizational Units with Text'
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OrganizationalUnit'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
define view I_OrganizationalUnitText
  as select distinct from hrp1000 as HRP1000
    inner join            t77s0   as systemtable on  grpid = 'PLOGI'
                                                 and semid = 'PLOGI'
                                                 and gsval = hrp1000.plvar
  association [0..1] to I_Language as _Language on hrp1000.langu = _Language.Language
{
  key hrp1000.objid as OrganizationalUnit,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key hrp1000.langu as Language,
 @Semantics.businessDate.from: true
  key begda         as StartDate,
   @Semantics.businessDate.to: true
  key endda         as EndDate,
      short         as OrganizationalUnitShortName,
      @Semantics.text: true
      hrp1000.stext as OrganizationalUnitName,
      _Language
}
where
      hrp1000.otype = 'O'
  and hrp1000.istat = '1'
```
