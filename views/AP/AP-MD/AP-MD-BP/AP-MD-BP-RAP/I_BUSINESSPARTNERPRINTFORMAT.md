---
name: I_BUSINESSPARTNERPRINTFORMAT
description: "Business PartnerPRINTFORMAT"
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - business-partner
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERPRINTFORMAT

**Business PartnerPRINTFORMAT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerPrintFormat` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_print_mode )` | `CHAR(1)` | Business Partner Print Format |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPartnerPrintFormatT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPPRNTFRMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@EndUserText.label: 'Business Partner Print Format'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  representativeKey: 'BusinessPartnerPrintFormat',
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  resultSet.sizeCategory: #XS,
  usageType.dataClass: #META,
  sapObjectNodeType.name: 'BusinessPartnerPrintFormat',
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessPartnerPrintFormat
  as select from dd07l
  association [0..*] to I_BusinessPartnerPrintFormatT as _Text on $projection.BusinessPartnerPrintFormat = _Text.BusinessPartnerPrintFormat
{
      @ObjectModel.text.association: '_Text'
      @EndUserText.label: 'Print Format'
      @Consumption.filter.hidden: true
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_print_mode ) as BusinessPartnerPrintFormat,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Consumption.hidden: true
      domvalue_l                                                                         as DomainValue,

      _Text
}
where
  domname = 'BU_PRINT_MODE'
```
