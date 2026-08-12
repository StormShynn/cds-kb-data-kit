---
name: I_CREDITCHECKRULE
description: "This CDS view provides a structured representation of credit check rules within a system. It serves as a dimension in analytical scenarios, allowing users to extract and analyze data related to credit check rules. The view includes associations to text descriptions for better understanding and interpretation of the rules. This CDS view provides the data to answer the following business questions: What are the defined credit check rules within the system? How can the credit check rules be associated with their descriptive texts for better clarity? How can these credit check rules be utilized in analytical processes to assess credit management strategies? What are the key identifiers for each credit check rule that can be used in reporting and data extraction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITCHECKRULE')/$value
semantic_en: "This CDS view provides a structured representation of credit check rules within a system. It serves as a dimension in analytical scenarios, allowing users to extract and analyze data related to credit check rules. The view includes associations to text descriptions for better understanding and interpretation of the rules. This CDS view provides the data to answer the following business questions: What are the defined credit check rules within the system? How can the credit check rules be associated with their descriptive texts for better clarity? How can these credit check rules be utilized in analytical processes to assess credit management strategies? What are the key identifiers for each credit check rule that can be used in reporting and data extraction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Check Rule — CDS view giao diện dựa trên ukm_chck_rule."
keywords:
  - "credit"
  - "check"
  - "rule"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
---
# I_CREDITCHECKRULE

**This CDS view provides a structured representation of credit check rules within a system. It serves as a dimension in analytical scenarios, allowing users to extract and analyze data related to credit check rules. The view includes associations to text descriptions for better understanding and interpretation of the rules. This CDS view provides the data to answer the following business questions: What are the defined credit check rules within the system? How can the credit check rules be associated with their descriptive texts for better clarity? How can these credit check rules be utilized in analytical processes to assess credit management strategies? What are the key identifiers for each credit check rule that can be used in reporting and data extraction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITCHECKRULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditCheckRule` | ✓ | |  | `check_rule` | `CHAR(10)` | Rule for Credit Check |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CreditCheckRuleText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITCHECKRULE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITCHECKRULE')/$value)*

```abap
@EndUserText.label: 'Credit Check Rule'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.internalName:#LOCAL
@AbapCatalog.sqlViewName: 'ICRDTCHECKRULE'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
//@VDM.private: false
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CreditCheckRule'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'CreditCheckRule'         
define view I_CreditCheckRule
  as select from ukm_chck_rule
  association [0..*] to I_CreditCheckRuleText as _Text on $projection.CreditCheckRule = _Text.CreditCheckRule
{
      @ObjectModel.text.association: '_Text'
  key check_rule       as CreditCheckRule,
      _Text
};
```
